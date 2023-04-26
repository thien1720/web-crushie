import { Link } from "react-router-dom";
import CardIteam from '~/components/CardIteam'
import classNames from "classnames/bind";
import styles from "./GroupIteam.module.scss";
const cx = classNames.bind(styles);

function GroupIteam() {

    return <section className={cx("group-one")}>
        <div className="container">
            <div className={cx("group-header")}>
                <h3>Áo Dài</h3>
                <Link to="/shops" >Xem thêm</Link>
            </div>

            <div className={cx("group-main")}>

                <div className="col-md-6 col-12">
                    <div className={cx("group-iteam")}>
                        <div className={cx("group-iteam-double")}>
                            <div className={cx("group-iteam-db-nav")}>
                                <CardIteam
                                    image="/crushie-img/sp14-1.webp"
                                    title={`AO DAI AN HY`}
                                    coin="3300000đ"
                                // y="5800000đ"

                                />
                            </div>

                            <div className={cx("group-iteam-db-nav")}>
                                <CardIteam
                                    image="/crushie-img/sp15-1.webp"
                                    title={`AO DAI AN NGUYET`}
                                    coin="3800000đ"
                                    y="4000000đ"

                                />
                            </div>
                        </div>

                        <div className={cx("group-iteam-double")}>
                            <div className={cx("group-iteam-db-nav")}>
                                <CardIteam
                                    image="/crushie-img/sp16-1.webp"
                                    title={`AO DAI AN DIEP`}
                                    coin="3300000đ"
                                    y="4000000đ"

                                />
                            </div>

                            <div className={cx("group-iteam-db-nav")}>
                                <CardIteam
                                    image="/crushie-img/sp14.webp"
                                    title={`AO DAI AN VU`}
                                    coin="39000000đ"
                                    y="4000000đ"

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("baner-aodai", "col-md-6 col-12")}>
                    <div className={cx("group-iteam")}>
                        <img src="crushie-img/ao-dai.jpeg" alt="ao-dai" />

                    </div>
                </div>

            </div>
        </div>
    </section>
}

export default GroupIteam