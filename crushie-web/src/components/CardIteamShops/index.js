import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

import { themContext } from "~/Default"
import { addHeart } from "~/store/reducers/option.slice";
import IteamColor from "../IteamColor";
import classNames from "classnames/bind";
import styles from "./CardIteam.module.scss";
const cx = classNames.bind(styles);

function CardIteam(props) {
    const dispatch = useDispatch()
    const productIteam = useContext(themContext)

    const colors = props.optionColor

    function handleAddHeart(e) {
        e.preventDefault()
        dispatch(addHeart(props.card))
        productIteam.setPopHeart(!productIteam.popHeart)
    }

    let x = new Intl.NumberFormat('vi-VN',
        { style: 'currency', currency: 'VND' }).format(props.coin);

    let y = new Intl.NumberFormat('vi-VN',
        {
            style: 'currency', currency
                : 'VND'
        }).format(props.saleCoin);

    // console.log(props.card)
    return <div className="col-6 col-lg-3 col-md-4 col-sm-6 mb-2">
        <div className={cx("laygout-iteam")}>
            <Link
                to={`/shops/${props.id}`}
            >
                <div className={cx("card-show-iteam")}>
                    <div className={cx("product-img")}>
                        <div className={cx("product-show-img")}>
                            <img src={props.card.listImg[0]} atl="sản phẩm" className={cx("image-iteam")} />
                        </div>

                        <div className={cx("product-push-iteam")}>
                            <Link to="/shops">
                                <BsSearch className={cx("product-icon")} />
                            </Link>

                            <Link to="/shops"
                                onClick={handleAddHeart}
                            >
                                <FiHeart className={cx("product-icon")} />
                            </Link>

                            <Link to="/shops">
                                <AiOutlineShopping className={cx("product-icon")} />
                            </Link>

                        </div>

                    </div>

                    <div className={cx("product-details")}>
                        <div className={cx("product-name")}>
                            <h3 className={cx("product-title")}>
                                <p>
                                    {props.title}
                                </p>
                            </h3>
                        </div>

                        <div className={cx("product-total")}>
                            <p className={cx("product-total-iteam")}>
                                {x}
                                <span className={cx("product-sale")}>
                                    {props.saleCoin ?
                                        y
                                        : undefined}
                                </span>

                            </p>

                            {props.totalSale ? <p className={cx("sale-coin")}>
                                {props.totalSale}%
                            </p> : undefined}
                        </div>

                        <div className={cx("product-color")}>
                            {colors ? colors.map((colors) => {
                                return <IteamColor key={uuidv4()} optionColor={colors} />
                            }) : undefined}


                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>
}

export default CardIteam