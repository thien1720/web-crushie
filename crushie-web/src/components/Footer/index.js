import { Link } from "react-router-dom";
import { BsBriefcase, BsTelephoneForward, BsMap, BsStopwatch, BsShare } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaYoutube } from "react-icons/fa";

import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

function Footer() {

    return <section className={cx("footer")}>
        <div className="container container-xl">
            <div className={cx("footer-main")}>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className={cx("footer-content")}>
                            <h4>Contact Us</h4>
                            <div className={cx("footer-logo")}>
                                <img src="/crushie-img/logo-Crushie.webp" />
                            </div>

                            <div className={cx("footer-contact")}>
                                <ul>
                                    <li>
                                        <BsMap className={cx("footer-icon")} />
                                        <p>CRUSHIE is a Vietnamese designed fashion brand</p>
                                    </li>

                                    <li>
                                        <BsTelephoneForward className={cx("footer-icon")} />
                                        <p>1900.2546</p>
                                    </li>

                                    <li>
                                        <BsBriefcase className={cx("footer-icon")} />
                                        <p>crushiebrandvn@gmail.com</p>
                                    </li>

                                    <li>
                                        <BsStopwatch className={cx("footer-icon")} />
                                        <p>THỨ 2 - CHỦ NHẬT ( 08:00 - 22:00 )</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className={cx("footer-content")}>
                            <h4>Support</h4>
                            <div className={cx("footer-support")}>
                                <ul>
                                    <li>
                                        <Link to="/size" >
                                            INSPIRED
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/size" >
                                            Cổng Thanh Toán
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/size" >
                                            Bảng Size Áo
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/size" >
                                            Bảo mật thông tin
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/shops" >
                                            Giao hàng thanh toán
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className={cx("footer-content")}>
                            {/* <h4>Fanpage</h4> */}
                            <div className={cx("footer-page")}>
                                <div className={cx("style-page")} >
                                    <img src="/crushie-img/item-hot.webp" alt="fanpage"
                                        className={cx("img-fanpage")}
                                    />
                                </div>

                                <div className={cx("name-page")}>
                                    <div className={cx("bgr-page")}></div>
                                    <Link to="facebook" className={cx("foat-iteam-img")}>
                                        <img
                                            src="/crushie-img/logo-Crushie.webp"
                                            alt="name"
                                            className={cx("img-name")}
                                        />
                                    </Link>
                                    <div className={cx("page-title")}>
                                        <p>CRUSHIE</p>
                                        <p className={cx("sub-page")}>242.788 lượt thích</p>
                                    </div>


                                </div>

                                <div className={cx("name-page-2")}>
                                    <div className={cx("to-face")}>
                                        <a href="https://www.facebook.com/"
                                            target="_blank"
                                        >
                                            <FaFacebookF />
                                            Đã thích
                                        </a>
                                    </div>

                                    <div className={cx("to-face")}>
                                        <a href="https://www.youtube.com/"
                                            target="_blank"
                                        >
                                            <BsShare />
                                            Chia sẻ
                                        </a>
                                    </div>
                                </div>


                            </div>

                            <div className={cx("new-letter-socials")}>
                                <a href="https://www.facebook.com/"
                                    target="_blank"
                                    className={cx("socials-box", "facebook")}>
                                    <FaFacebookF />
                                </a>

                                <a href="https://twitter.com/"
                                    target="_blank"
                                    className={cx("socials-box", "twitter")}>
                                    <FaTwitter />
                                </a>
                                <a href="https://www.pinterest.com"
                                    target="_blank"
                                    className={cx("socials-box", "printer")}>
                                    <FaPinterestP />
                                </a>
                                <a href="https://www.instagram.com"
                                    target="_blank"
                                    className={cx("socials-box", "intargram")}>
                                    <FaInstagram />
                                </a>
                                <a href="https://www.youtube.com"
                                    target="_blank"
                                    className={cx("socials-box", "youtube")}>
                                    <FaYoutube />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("footer-bottom")}>
                    <p>
                        © 2023 - All rights reserved by
                        <b >
                            F1GEN TECHNOLOGY CO., LTD.
                        </b>
                        <b >
                            Powered by Haravan
                        </b>
                    </p>

                    {/* <div className={cx("paying")}>
                        <div className={cx("iteam-paying")}>
                            <Link to="/shop" className={cx("style-item")}>
                                <img src="/eternity/pay-img.svg" atl="paying" />

                            </Link>
                        </div>


                        <div className={cx("iteam-paying")}>
                            <Link to="/shop" className={cx("style-item")}>
                                <img src="/eternity/paying-1.svg" atl="paying" />

                            </Link>
                        </div>

                        <div className={cx("iteam-paying")}>
                            <Link to="/shop" className={cx("style-item")}>
                                <img src="/eternity/pay-img-2.svg" atl="paying" />

                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section >
}

export default Footer