import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { BsPeople, BsStopwatch, BsArrowRight } from "react-icons/bs";

import classNames from "classnames/bind"
import styles from "./Size.module.scss";

const cx = classNames.bind(styles);


function SizeChat() {

    const params = useParams()
    const [page, setPage] = useState(true)
    console.log(params)

    console.log(page)

    return <div className={cx("page-size")}>
        <div className={cx("bread-shop")}>
            <div className="container container-xl">
                <div className={cx("bread-pages")}>
                    <Link to="/" className={cx("bread-page",)}>
                        Trang Chủ
                    </Link>
                    <Link to="/sizeChat" className={cx("bread-page", "active")}>
                        Size Áo
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
                                        <img src="/crushie-img/sp1-5.jpg" alt="iteam-1" />
                                    </Link>
                                    <p className={cx("people-time")}>
                                        <span>
                                            <BsPeople className={cx("page-people")} />
                                            Crushie
                                        </span>
                                        -
                                        <span>
                                            <BsStopwatch className={cx("page-people")} />
                                            1/6/2023.
                                        </span>
                                    </p>
                                </div>


                                <div className={cx("show-option-size")}>
                                    <h3>Bảng size áo
                                        <span></span>
                                    </h3>

                                    <p className={cx("show-size-text")}>
                                        <span>Hướng dẫn chọn size áo thun ETERNITY ♡</span>
                                        <span>- Áo thun sẽ gồm 3 :</span>
                                        <span>size S : 1m53 - 1m60 | Nặng : 43 - 49kg</span>
                                        <span>size M : 1m65 - 1m65 | Nặng : 50 - 56kg</span>
                                        <span>size L : 1m60 - 1m70 | Nặng : 58 - 63kg</span>

                                    </p>
                                    <Outlet context={[setPage]} />
                                    {page && <h5 className={cx("show-detail")}>
                                        <Link to="detailSize"
                                            onClick={() => setPage(!page)}
                                        >
                                            Xem chi tiết
                                            <BsArrowRight className={cx("show-box")} />
                                        </Link>
                                    </h5>

                                    }



                                </div>
                            </div>


                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className={cx("size-bar")}>
                                <h2>Danh mục Blog</h2>

                                <div className={cx("page-nav-contact")}>
                                    <ul>
                                        <li>
                                            <Link to="/shops">All</Link>
                                        </li>
                                        <li>
                                            <Link to="/shops">Summer</Link>
                                        </li>

                                        <li>
                                            <Link to="/shops">
                                                Áo dài
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/shops"
                                            >Holiday Collection</Link>
                                        </li>


                                    </ul>
                                </div>

                                <div className={cx("contact-nav")}>
                                    <h2 > Tin Tức Khác</h2>

                                    <Link to="/contact" >
                                        <div className={cx("contact-card")}>
                                            <img src="/crushie-img/logo-Crushie.webp" alt="contact" />
                                            <div className={cx("contact-detail")}>
                                                <p className={cx("contact-head")}>
                                                    Contact Us

                                                </p>
                                                <span>
                                                    1/6/2023
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

export default SizeChat;