
import { Link, Outlet , useParams } from "react-router-dom";
import { BsPeople, BsStopwatch, BsArrowRight } from "react-icons/bs";

import classNames from "classnames/bind"
import styles from "./About.module.scss";

const cx = classNames.bind(styles);


function Abouts() {
    return <div className={cx("page-size")}>
    <div className={cx("bread-shop")}>
        <div className="container container-xl">
            <div className={cx("bread-pages")}>
                <Link to="/" className={cx("bread-page",)}>
                    Trang Chủ
                </Link>
                <Link to="/sizeChat" className={cx("bread-page", "active")}>
                    Blog-tin tức
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
                                        <img src="/eternity/blog-size.webp" alt="iteam-1" />
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
                                    <div className={cx("content-conact")}>
                                        <h1>Contact Us</h1>
                                    </div>

                                    <div className={cx("page-shop")}>
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                FACEBOOK : https://www.facebook.com/ETERNITYVIETNAM
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www.instagram.com/" target="_blank">
                                                INSTARGRAM : https://www.instagram.com/eternity_vietnam/
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://shopee.vn/" target="_blank">
                                                SHOPPE : https://shopee.vn/eternity_vietnam
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www.google.com/intl/vi/gmail/about/" target="_blank" >
                                                EMAIL : Eternitybrandvn@gmail.com
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https:www.google.com/phone" target="_blank">
                                                Hotline : 037 6046 310
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={cx("sub-text")}>
                                        <img src="/eternity/header-contact.png"  alt="sub-img"/>
                                    </div>

                                    
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

export default Abouts;