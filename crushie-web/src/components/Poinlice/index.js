import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper";

import classNames from "classnames/bind";
import styles from "./Poinlice.module.scss";
const cx = classNames.bind(styles);

function Poinlice() {

    return <div className=" ">
        <div className={cx("summer")}>
            <h3>SPRING-SUMMER'23</h3>
            <Link to="/shops" >Xem thêm</Link>
        </div>
        <Swiper
            slidesPerView={4}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
                delay: 6000,
            }}
            breakpoints={
                {
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 4,

                    },
                }
            }
            className={cx("mySwiper")}
        >
            <div className={cx("poinlice-iteam")}>

                <SwiperSlide className={cx("iteam-img")} >

                    <Link to="/shops" >
                        <img src="/crushie-img/sp21-1.jpg" atl="paner" />
                    </Link>

                </SwiperSlide>

                <SwiperSlide className={cx("iteam-img")} >

                    <Link to="/shops" >
                        <img src="/crushie-img/sp2-2.jpeg" atl="paner" />
                    </Link>

                </SwiperSlide>

                <SwiperSlide className={cx("iteam-img")} >

                    <Link to="/shops" >
                        <img src="/crushie-img/sp3-1.jpeg" atl="paner" />
                    </Link>

                </SwiperSlide>

                <SwiperSlide className={cx("iteam-img")} >

                    <Link to="/shops" >
                        <img src="/crushie-img/sp4.jpeg" atl="paner" />
                    </Link>

                </SwiperSlide>

                <SwiperSlide className={cx("iteam-img")} >

                    <Link to="/shops" >
                        <img src="/crushie-img/sp5.webp" atl="paner" />
                    </Link>

                </SwiperSlide>

                <SwiperSlide className={cx("iteam-img")} >

                    <Link to="/shops" >
                        <img src="/crushie-img/sp6-3.jpeg" atl="paner" />
                    </Link>

                </SwiperSlide>
            </div>

        </Swiper>
    </div >
}
export default Poinlice