import classNames from "classnames/bind"
import { Link } from "react-router-dom";
import styles from "./Services.module.scss";

const cx = classNames.bind(styles);

function Service() {
    return <div className={cx("page-services")}>
        <div className={cx("header-service")}>
            <h1 className={cx("slogan-header-service")}>
                Chính Sách Đổi Trả
            </h1>


        </div>

        <div className="container">
            <div className={cx("nav-service")}>
                <Link to="/" className={cx("bread-page",)}>Trang Chủ</Link>
                <Link to="/service" className={cx("bread-page", "active")}>Chính Sách đổi trả</Link>
            </div>


            <div className={cx("content-service")}>
                <p className={cx("header-img")}>
                    <img src="/crushie-img/item-hot.webp" alt="iteam-service" />
                </p>

                <div className={cx("condition-change")}>
                    <h5>1. Điều kiện đổi trả</h5>
                    <h6>Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay
                        tại thời điểm giao/nhận hàng trong những trường hợp sau:
                    </h6>

                    <ul>
                        <li>
                            Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.
                        </li>

                        <li>
                            Không đủ số lượng, không đủ bộ như trong đơn hàng.
                        </li>

                        <li>
                            Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, …
                        </li>

                        <li>
                            Sản phẩm bị lỗi .
                        </li>

                        <li>
                            Khách hàng có trách nhiệm đưa mã đơn hàng chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.
                        </li>
                    </ul>
                </div>

                <div className={cx("timeline-change")}>
                    <h5>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả </h5>

                    <ul>
                        <li>
                            <strong>Thời gian thông báo đổi trả</strong>
                            <span>: trong vòng 1h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm bị lỗi do may , in ấn</span>
                        </li>

                        <li>
                            <strong>Thời gian gửi chuyển trả sản phẩm</strong>
                            <span>: trong vòng 5 ngày kể từ khi nhận sản phẩm.</span>
                        </li>
                        <li>
                            <strong>Địa điểm đổi trả sản phẩm</strong>
                            <span>: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện , Viettel Post , GHTK</span>
                        </li>

                    </ul>
                </div>


                <div className={cx("no-change")}>
                    <h5>3.Những trường hợp không nằm trong chính sách đổi trả.</h5>

                    <h6>
                        Để khách hàng nắm rõ hơn về những chính sách mua hàng của chúng tôi , thì đây sẽ là những trường hợp không đươc áp dụng
                    </h6>
                    <ul>
                        <li>
                            - Sản phẩm sẽ
                            <strong>không được hổ trợ đổi size</strong>
                            ( Khách hàng hãy lưu ý và nhờ đến sự tư vấn của chuyên viên bán hàng ) để chọn được size theo sở thích mong muốn .
                        </li>

                        <li>
                            - Sản phẩm đã được mặc qua , có dấu hiệu của việc khách hàng
                            <strong>làm bẩn</strong>
                        </li>

                        <li>
                            - Sản phẩm đã được
                            <strong>ngâm qua nước</strong>
                            , chắc chắn sẽ không được chúng tôi đổi trả .

                        </li>

                        <li>
                            Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng
                            vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi hotline : 0376046310
                        </li>

                    </ul>


                </div>
            </div>
        </div>
    </div>;
}

export default Service;