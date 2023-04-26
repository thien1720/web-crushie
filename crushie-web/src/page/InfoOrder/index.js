import { useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Popup from 'reactjs-popup';
import {
    cartTotalPriceSelector,
} from "~/store/selector/selector";
import FormAddress from "~/components/FormAddress";

import classNames from "classnames/bind";
import styles from "./InfoOrder.module.scss";
const cx = classNames.bind(styles);

function InfoOrder() {
    const [open, setOpen] = useState(false);
    const [fullName, setFullName] = useState("");
    const closeModal = () => setOpen(false);
    const [sale, setSale] = useState("")
    const cartItems = useSelector((state) => state.cart);
    const totalPrice = useSelector(cartTotalPriceSelector);
    const dispatch = useDispatch();


    let sumtotal = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(totalPrice);


    let provisionnal
    function handlesalePro() {

        if (sale === "eternity") {
            console.log('thien')
            provisionnal = new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND"
            }).format(totalPrice - (totalPrice * 0.1))

            return provisionnal

        } else {

            return sumtotal

        }
    }



    return <div className={cx("info-main", "container", "contaner-xl")}>

        <div className={cx("box-popup")}>
            {open ? <div className={cx("popup")}>
                <p>chúc mừng <span>{fullName}</span> đã đặt hàng tại Eternity.</p>

                <button
                    className={cx("close-popup")}
                    onClick={closeModal}
                >Đồng Ý</button>
            </div> : undefined}

        </div>

        <h3 className={cx("title-info")}>Eternity</h3>

        <div className={cx("page-info-cart")}>
            <Link to="/cart" >Giỏ hàng</Link>
            <p>Thông tin giao hàng</p>
        </div>


        <div className={cx("style-reverce", "row")}>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <FormAddress
                    setOpen={setOpen} open={open}
                    fullName={fullName}
                    setFullName={setFullName}
                />

            </div >
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className={cx("show-result-item")}>
                    {cartItems.length > 0 ?

                        cartItems.map((cart) => {

                            let totalCoins = new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(cart.cards.coin);

                            // console.log(cart)
                            return <div className={cx("cart-item")} key={cart.cards.id}>
                                <img src={cart.cards.listImg[0]} alt="anh sản phẩm" />
                                <div className={cx("detail")}>
                                    <h5>{cart.cards.title}</h5>
                                    <p>Số lượng:{cart.quantity}</p>
                                    <p>Màu sắc: {cart.Color} </p>
                                    <p> Size: {cart.type}</p>
                                </div>

                                <div className={cx("result-item-coin")}>{totalCoins}</div>
                            </div>
                        })

                        : <p className={cx("no-iteam")}>Giỏ hàng của bạn không có sản phẩm nào.</p>}

                    <div className={cx("code-flase")}>
                        <input type="text" className={cx("slec-input-name")} placeholder="Mã giảm giá"
                            value={sale}
                            onChange={e => setSale(e.target.value)}
                        />
                        <button onClick={handlesalePro
                        }>Sử dụng</button>
                    </div>

                    <div className={cx("total-sub-coin")}>
                        <div className={cx("select-row")}>
                            <p>Tạm tính</p>
                            <p>{sumtotal}</p>
                        </div>

                        <div className={cx("select-row")}>
                            <p>Mã giảm giá</p>
                            {sale === "eternity" ?
                                <p className={cx("sale-result")}>{"được giảm 20 %"}</p> : "0đ"}
                        </div>



                        <div className={cx("select-row", "result-sum-iteam")}>
                            <h3>Tổng cộng</h3>
                            <h3>{handlesalePro()}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    </div >
}

export default InfoOrder;