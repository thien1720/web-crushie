import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination, Controller } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import { v4 as uuidv4 } from 'uuid';

import classNames from "classnames/bind";
import styles from "./SlideShowImg.module.scss";
const cx = classNames.bind(styles);

function SlideShow({ image }) {
    const [firstSwiper, setFirstSwiper] = useState();
    // console.log(image)
    return (
        <div className={cx("slide-show-img")}>
            <Swiper
                loop={true}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                // thumbs={{ swiper: firstSwiper }}
                modules={[Navigation, Thumbs, Pagination]}
                onSwiper={setFirstSwiper}
                // controller={{ control: secondSwiper }}
                className="mySwiper2"
            >

                {image.map((img) => {
                    return <SwiperSlide key={uuidv4()}>
                        <img src={img}
                            className={cx("show-parent-img")}
                            alt="image"
                        />
                    </SwiperSlide>
                })}

            </Swiper>

            <Swiper
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                // watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                onSwiper={setFirstSwiper}
                // controller={{ control: firstSwiper }}
                className={cx("nav-list-img")}
            >
                {image.map((img, index) => {
                    return <SwiperSlide key={index}>
                        <div>
                            <img src={img}
                                className={cx("show-parent-img")}
                                alt="image" />

                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )

}

export default SlideShow;
