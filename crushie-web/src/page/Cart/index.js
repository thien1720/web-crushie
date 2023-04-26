import { useContext } from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";

import {
    increament,
    decreament,
    removeFromCart,
} from "~/store/reducers/cart.slice";
import {
    cartTotalPriceSelector
} from "~/store/selector/selector";
import { themContext } from "~/Default"

import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
const cx = classNames.bind(styles);

function Cart() {
    const cartItems = useSelector((state) => state.cart);
    const totalPrice = useSelector(cartTotalPriceSelector);
    const dispatch = useDispatch();
    const productIteam = useContext(themContext)

    let sumtotal = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(totalPrice);


    return <div className={cx("page-cart")}>
        <div className="container container-lg">

            <div className={cx("row")}>

                <div className=" col-lg-7 col-md-12 col-sm-12 col-12">
                    {cartItems.length ? cartItems.map((cart) => {

                        let totalCoins = new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(cart.cards.coin);

                        let totalSaleCoin = new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(cart.cards.saleCoin);
                        console.log(cart)
                        return <div className={cx("group-cart")} key={cart.cards.id}>
                            <div className={cx("show-cart")}>
                                <div className={cx("iteam-img")}>
                                    <img src={cart.cards.listImg[0]} alt="product" />
                                </div>

                                <div className={cx("detail-iteam")}>
                                    <h3>{cart.cards.title}</h3>

                                    <div className={cx("option-color-size")}>
                                        <p>Màu sắc: {cart.Color}</p>
                                        <p>Size: {cart.type}</p>
                                    </div>

                                    <p className={cx("remove-iteam")}
                                        onClick={() => {
                                            dispatch(removeFromCart(cart))
                                        }
                                        }
                                    >
                                        <FaRegTrashAlt className={cx("icon-remove")} />
                                        xóa sản phẩm
                                    </p>
                                </div>


                                <div className={cx("total-coin")}>
                                    <p className={cx("coin")}>{totalCoins}</p>
                                    {cart.cards.saleCoin ? <p className={cx("sale-coin")}>{totalSaleCoin}</p> : undefined}
                                </div>

                                <div className={cx("quantity")}>

                                    <button className={cx("btn-incre")}>
                                        <p className={cx("incre")}
                                            onClick={() => { dispatch(increament(cart.cards.id)) }}
                                        > +
                                        </p>
                                    </button>

                                    <p className={cx("total-quantity")}>{cart.quantity}</p>

                                    <button
                                        className={cx("btn-incre")}
                                        disabled={cart.quantity === 1 ? "disabled" : ""}
                                        onClick={() => { dispatch(decreament(cart.cards.id)) }}
                                    >
                                        <i className={cx("decre")}
                                        >-
                                        </i>
                                    </button>

                                </div>

                            </div>
                        </div>
                    }) : <div className={cx("cart-no-iteam")}>
                        <h5>Giỏ hàng không có sản phầm nào.</h5>
                    </div>}
                </div>
                <div className=" col-lg-5 col-md-12 col-sm-12 col-12">
                    <div className={cx("cart-page-detail")}>
                        <div className={cx("sum-cart-total")}>
                            <h3>Thông Tin Đơn Hàng</h3>

                            <div className={cx("provisionnal")}>
                                <div className={cx("sum-total-iteam", "cart-info-monney")}>
                                    <p>Tạm tính {cartItems.length} sản phẩm</p>
                                    <span className={cx("")}>{sumtotal}</span>
                                </div>

                                <div className={cx("shiping")}>
                                    <p>Phí vận chuyển sẽ được tính ở trang thanh toán. Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</p>
                                </div>
                            </div>

                            <div className={cx("sub-total-coin", "cart-info-monney")}>
                                <p>Tổng Cộng</p>

                                <div className={cx("monney-total")}>
                                    <p>{sumtotal}</p>
                                </div>
                            </div>

                            <div className={cx("btn-order")}>
                                <Link to="/info-order" >
                                    Đặt hàng
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx("service-cart")}>
                <div className={cx("next-page-shops")}>
                    <Link to="/shops" >Tiếp tục mua hàng</Link>
                </div>
            </div>
        </div>



    </div >
}

export default Cart