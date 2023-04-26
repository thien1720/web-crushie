import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper";

import Banner from "~/components/Banner";
import Poinlice from "~/components/Poinlice";
import GroupIteam from "~/components/GroupIteam";
import styles from "./Home.module.scss";
import CardIteam from "~/components/CardIteam";
const cx = classNames.bind(styles);


function Home() {
    return <div className={cx("home")}>
        <Banner />

        <Poinlice />

        <GroupIteam />

        {/* Item Hot */}
        <section className={cx("item-hot")}>
            <div className={cx("container-fluid")}>
                <div className={cx("row")}>
                    <div className={cx("col-lg-6 col-md-12 col-xs-12 col-sm-12")}>
                        <img src="/crushie-img/item-hot.webp" atl="item-hot" />
                    </div>

                    <div className={cx("col-lg-6 col-md-12 col-xs-12 col-sm-12")}>
                        <div className={cx("box-item-hot")}>
                            <div className={cx("head-item-hot")}>
                                <h3>Item Hot</h3>
                                <Link to="/shops" >Xem thêm</Link>

                            </div>
                            <div>
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={3}
                                    modules={[Navigation, Pagination, Autoplay]}
                                    autoplay={{
                                        delay: 3000,
                                    }}

                                    breakpoints={
                                        {
                                            300: {
                                                slidesPerView: 2,
                                                spaceBetween: 30,
                                            },
                                            768: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                            },

                                        }
                                    }
                                    className={cx("item-hot-swiper")}
                                >
                                    <div className={cx("vendor-slide")}>
                                        <SwiperSlide className={cx("iteam-hot-img")} >
                                            <div className={cx("group-iteam-db-nav")}>
                                                <CardIteam
                                                    image="/crushie-img/sp10-1.jpeg"
                                                    title={`BRANDY TOP`}
                                                    coin="850000đ"

                                                    center={true}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className={cx("iteam-hot-img")} >
                                            <div className={cx("group-iteam-db-nav")}>
                                                <CardIteam
                                                    image="/crushie-img/sp22-2.jpg"
                                                    title={`VÁY FIONA`}
                                                    coin="1600000đ"

                                                    center={true}


                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className={cx("iteam-hot-img")} >
                                            <div className={cx("group-iteam-db-nav")}>
                                                <CardIteam
                                                    image="/crushie-img/sp18-3.webp"
                                                    title={`VÁY ANNI`}
                                                    coin="1200000đ"

                                                    center={true}

                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className={cx("iteam-hot-img")} >
                                            <div className={cx("group-iteam-db-nav")}>
                                                <CardIteam
                                                    image="/crushie-img/sp8-3.jpeg"
                                                    title={`APEROL TOP`}
                                                    coin="980000đ"

                                                    center={true}

                                                />
                                            </div>
                                        </SwiperSlide>
                                        {/* <SwiperSlide className={cx("iteam-hot-img")} >
                                            <div className={cx("group-iteam-db-nav")}>
                                                <CardIteam
                                                    image="/crushie-img/sp11-1.webp"
                                                    title={`AO DAI AN HY`}
                                                    coin="3300000đ"

                                                    center={true}

                                                />
                                            </div>
                                        </SwiperSlide> */}


                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Policy */}
        <section className={cx("policy")}>
            <div className="container">
                <div className={cx("row")}>
                    <div className={cx("policy-item", "col-md-3 col-sm-3 col-xs-12")}>
                        <div className={cx("policy-img", "filter-invert")}>
                            <img src="/crushie-img/store-policy.png" alt="store" />
                        </div>

                        <div className={cx("policy-detail")}>
                            <p className={cx("detail")}>Free Shiping</p>
                            <span>All orders from 2.500.000vnd</span>
                        </div>
                    </div>

                    <div className={cx("policy-item", "col-md-3 col-sm-3 col-xs-12")}>
                        <div className={cx("policy-img")}>
                            <img src="/crushie-img/return-item.png" alt="return" />
                        </div>

                        <div className={cx("policy-detail")}>
                            <p className={cx("detail")}>03 DAYS RETURN</p>
                            <span>Free 3 days return</span>
                        </div>
                    </div>

                    <div className={cx("policy-item", "col-md-3 col-sm-3 col-xs-12")}>
                        <div className={cx("policy-img")}>
                            <img src="/crushie-img/phone-policy.png" alt="phone" />
                        </div>

                        <div className={cx("policy-detail")}>
                            <p className={cx("detail")}>MUA HÀNG (8h30-21h30, T2-CN)</p>
                            <span>CSKH 0338.806.222</span>
                        </div>
                    </div>

                    <div className={cx("policy-item", "col-md-3 col-sm-3 col-xs-12")}>
                        <div className={cx("policy-img", "filter-invert")}>
                            <img src="/crushie-img/store-policy.png" alt="store" />
                        </div>

                        <div className={cx("policy-detail")}>
                            <p className={cx("detail")}>Store</p>
                            <span>58A Ba Trieu - Hoan Kiem - Ha Noi</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Reviver-new */}
        <section className={cx("reciver-new")}>
            <div className="container">
                <div className={cx("new-reciver")}>
                    <div className={cx("form-reciver")}>
                        <h3>Đăng ký nhận tin</h3>
                        <form className={cx("type-form-reciver")}>
                            <input
                                name="email"
                                type="email"
                                className={cx("reciver-email")}
                                placeholder="Nhập địa chỉ email của bạn..."

                            />

                            <button className={cx("sub-reciver")}>
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>

}

export default Home;