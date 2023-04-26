import { Link, Outlet, useParams } from "react-router-dom";
import { BsPeople, BsStopwatch, BsArrowRight } from "react-icons/bs";


import classNames from "classnames/bind"
import styles from "./Payment.module.scss";

const cx = classNames.bind(styles);

function Payment() {
    return <div className={cx("page-size")}>
        <div className={cx("bread-shop")}>
            <div className="container container-xl">
                <div className={cx("bread-pages")}>
                    <Link to="/" className={cx("bread-page",)}>
                        Trang Chủ
                    </Link>
                    <Link to="/sizeChat" className={cx("bread-page", "active")}>
                        Phương thức thanh toán.
                    </Link>

                </div>
            </div>


            <div className={cx("page-main")}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className={cx("size-body")}>
                                <div className={cx("size-blog-card")}>
                                    <Link to="/sizeChat">
                                        <img src="/eternity/payment.webp" alt="iteam-1" />
                                    </Link>
                                    <p className={cx("people-time")}>
                                        <span>
                                            <BsPeople className={cx("page-people")} />
                                            eternity
                                        </span>
                                        -
                                        <span>
                                            <BsStopwatch className={cx("page-people")} />
                                            1/6/2022.
                                        </span>
                                    </p>
                                </div>


                                <div className={cx("show-option-size")}>
                                    <h1>Cổng Thông Tin Thanh Toán Eternity
                                        <span></span>
                                    </h1>
                                    <p>Xin chào khách hàng của Eternity </p>
                                    <p>Để tiện cho việc thanh toán khi mua hàng của các bạn
                                        , chúng tôi sẽ cập nhật một số phương thức thanh toán cho bạn
                                        tại đây
                                    </p>

                                    <p className={cx("show-size-text", "grid-box-payment")}>

                                        <span>1. Thanh toán bằng Phương Thức Chuyển Khoản</span>
                                        <span>Ngân Hàng TechCombank</span>
                                        <span>Chủ Tài Khoản : Phạm Văn Thiên</span>
                                        <span>Số Tài Khoản : 19037067951011</span>
                                        <span>Chi Nhánh Cầu Giấy</span>
                                        <span>Nội Dung Chuyển Khoản :
                                            Mã đơn hàng /.  ví dụ : 135678 Thanh
                                        </span>
                                    </p>

                                    <p className={cx("show-size-text", "grid-box-payment")}>
                                        <span>* Ngân Hàng TP.Bank  </span>
                                        <span>Chủ Tài Khoản : Phan Thanh Sang
                                        </span>
                                        <span>Số Tài Khoản : 04047415001 </span>
                                        <span>Chi Nhánh Gò Vấp</span>
                                        <span>Nội Dung Chuyển Khoản :
                                            Mã đơn hàng /.  ví dụ : 135678 Thanh
                                        </span>
                                    </p>

                                    <p className={cx("show-size-text", "grid-box-payment")}>
                                        <span>2. Thanh Toán Bằng Momo </span>
                                        <span>Quét mã thanh toán bằng mã QR :
                                        </span>
                                        <span>Chủ Tài Khoản Phan Thanh Sang  </span>
                                        <span>Nội Dung Chuyển Khoản :
                                            Mã đơn hàng /.  ví dụ : 135678 Thanh
                                        </span>
                                        <div className={cx("momo")}>
                                            <img src="eternity/momo-payment.webp" alt="payment" />
                                        </div>
                                    </p>


                                    <p className={cx("show-size-text", "grid-box-payment")}>
                                        <span>3. Thanh Toán Bằng Ship cod </span>
                                        <span>Eternity sẽ gọi xác nhận đơn hàng , khi đơn hàng được gọi xác nhận đơn hàng thành công
                                        </span>
                                        <span>Bạn sẽ thanh toán cho shiper </span>
                                        <span>Đơn vị giao hàng của Eternity : GHTK '' Giao Hàng Tiết Kiêm ''
                                        </span>

                                    </p>


                                    <Outlet />
                                    <h5 className={cx("show-detail")}>
                                        <Link to="/shops">
                                            Mua Hàng
                                            <BsArrowRight className={cx("show-box")} />
                                        </Link>
                                    </h5>
                                </div>
                            </div>


                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className={cx("size-bar")}>
                                <h2>Danh mục Blog</h2>

                                <div className={cx("list-iteam")}>
                                    <ul>
                                        <li>
                                            <Link to="/product">
                                                All
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/product">
                                                Tshirt
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/product">
                                                HOODIE - VARSITY - JACKET
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/product">
                                                Shirt
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/product">
                                                Short Eternity
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/product">
                                                ACCESSORIES
                                            </Link>
                                        </li>


                                    </ul>
                                </div>

                                <div className={cx("contact-nav")}>
                                    <h2 > Tin Tức Khác</h2>

                                    <Link to="/contact" >
                                        <div className={cx("contact-card")}>
                                            <img src="/eternity/blog-size.webp" alt="contact" />
                                            <div className={cx("contact-detail")}>
                                                <p className={cx("contact-head")}>
                                                    Contact Us

                                                </p>
                                                <span>
                                                    1/6/2022
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Payment;