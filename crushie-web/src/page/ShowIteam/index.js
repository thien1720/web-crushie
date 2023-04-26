import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Popup from 'reactjs-popup';
import { useDispatch, useSelector } from "react-redux";
import { BsXCircle } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';
import SlideShow from "~/components/SlideShowImg";
import { addToCart } from "~/store/reducers/cart.slice";
import IteamColor from "~/components/IteamColor";
import classNames from "classnames/bind";
import styles from "./ShowIteam.module.scss";

const cx = classNames.bind(styles);

function ShowIteam() {

    let params = useParams()
    const dispatch = useDispatch()
    const [cards, setCard] = useState()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const [type, setType] = useState("")
    const [Color, setColor] = useState("")
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);



    useEffect(() => {
        fetch(`https://api-web-crushie.onrender.com/project/${params.id}`)
            .then((res) => res.json())
            .then((card) => {
                setCard(card)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })

    }, [params])

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }
    if (error) {
        return (
            <p>Có lỗi xảy ra !</p>
        )
    }


    let proIteam = {
        cards,
        quantity,
        type,
        Color
    }

    let priceCoin = new Intl.NumberFormat('vi-VN',
        { style: 'currency', currency: 'VND' }).format(cards.coin)

    let priceSale = new Intl.NumberFormat('vi-VN',
        { style: 'currency', currency: 'VND' }).format(cards.saleCoin)

    console.log(cards)
    return <div className={cx("show-iteam")}>

        <div className="breadcrumb-wrap container-xl container ">

            <div className={cx("nav-show")}>
                <Link to="/" className={cx("page-home")} >
                    Trang Chủ
                </Link>

                <Link to="/shops" >
                    Shop
                </Link>

                <p className={cx("title-iteam")}>{cards.title}</p>
            </div>

        </div>

        <div className={cx("product-iteam",)}>

            <div className={cx("module-select-option")}>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className={cx("box-popup")}>
                        <div className={cx("header-popup")}>
                            <p onClick={closeModal} className={cx("selec-close")}>
                                <BsXCircle className={cx("close")} />
                            </p>
                        </div>

                        <div className={cx("popup-description")}>
                            Vui lòng chon size và màu săc
                        </div>
                    </div>
                </Popup>
            </div>

            <div className="container-xl container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                        <SlideShow image={cards.listImg} />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">

                        <div className={cx("select-option")}>
                            <div className={cx("local")}>eternity</div>

                            <div className={cx("title-detail")}>
                                <h1>
                                    {cards.title}
                                </h1>
                            </div>

                            <div className={cx("card-price")}>
                                <p className={cx("card-price-coins")}>{priceCoin}</p>
                                {cards.saleCoin ? <p className={cx("card-price-sale-coins")}>{priceSale}</p> : undefined}
                                {cards.totalSale ? <p className={cx("card-price-total-sale")}>{cards.totalSale}%</p> : undefined}

                            </div>

                            <div className={cx("option-size")}>
                                <div className={cx("head-size")}>
                                    <p>Kích thước</p>

                                    <Link to="/sizeChat">Hướng dấn chọn size</Link>
                                </div>

                                <div className={cx("select-size")}>
                                    {cards.size ?
                                        cards.size.map((sz) => {
                                            return <p
                                                key={sz}
                                                className={cx("nav-size",
                                                    type === sz ? "borrder-color"
                                                        : "")}
                                                onClick={() => setType(sz)}

                                            >{sz}</p>
                                        }) :
                                        undefined
                                    }
                                </div>
                            </div>

                            <div className={cx("option-color")}>
                                <p>Màu sắc</p>

                                {cards.optionColor ? cards.optionColor.map((color, index) => {
                                    return <IteamColor
                                        key={uuidv4()}
                                        optionColor={color}
                                        onClick={() => setColor(color)}
                                        selecColor={Color}
                                    />
                                }) : undefined}
                            </div>


                            <div className={cx("quantity")}>

                                <button className={cx("btn-incre")}>
                                    <p
                                        className={cx("incre")}
                                        onClick={() => (setQuantity(quantity + 1))}
                                    >
                                        +
                                    </p>
                                </button>
                                <p>{quantity}</p>

                                <button
                                    className={cx("btn-incre")}
                                    disabled={quantity === 1 ? "disabled" : ""}
                                    onClick={() => (setQuantity(quantity - 1))}
                                >
                                    <i
                                        className={cx("decre")}
                                    >
                                        -
                                    </i>
                                </button>

                            </div>

                            <div className={cx("option-paying")}>
                                <Link to="/cart"
                                    // ref={cart}
                                    className={cx("add-card")}
                                    onClick={(e) => {
                                        if (proIteam.type.length > 0) {

                                            dispatch(addToCart(proIteam))
                                        } else {
                                            setOpen(!open)
                                            e.preventDefault()
                                        }
                                    }
                                    }
                                >
                                    Thêm vào giỏ hàng.
                                </Link>

                                <Link to="/carting" className={cx("buy-now")}>
                                    Mua ngay
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>




                <div className={cx("guide")}>
                    <div className={cx()}></div>
                </div>

            </div>
        </div>


    </div>
}

export default ShowIteam;