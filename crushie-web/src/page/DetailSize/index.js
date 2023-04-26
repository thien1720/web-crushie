import { useState, useRef } from "react"
import { Link, useOutletContext, useParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useFormik } from "formik"
import * as Yup from "yup"

import classNames from "classnames/bind"
import styles from "./DetailSize.module.scss";

const cx = classNames.bind(styles);

function DetailSize() {
    const text = useRef()


    const [setPage] = useOutletContext()
    const [useCom, setUseCom] = useState(() => {
        const storeComment = JSON.parse(localStorage.getItem('comment'))

        return storeComment ?? []
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            comment: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Vui lòng nhập trường này."),
            email: Yup.string()
                .required("Vui lòng nhập email.")
                .email("Nhập đúng email của bạn chưa đúng.")

        }),
        onSubmit: (values, { resetForm }) => {
            setUseCom((prev) => {
                const useComments = [...prev, values]
                const localStore = JSON.stringify(useComments)
                localStorage.setItem('comment', localStore)
                return useComments
            })
            resetForm({ values: "" })

        }

    })

    return <div className={cx("show-detail-size")}>
        <div className={cx("detail-img")}>
            <img src="/crushie-img/img-size.jpg" alt="size" />

        </div>

        <div className={cx("sub-use-size")}>
            <p>* Hoặc inbox vào page Crushie trên FB hoặc IG đề chúng mình có thể tư vấn cho bạn size sản phẩm phù hợp nhất nha. </p>
            <div className={cx("time-ship")}>
                <p>- Thời gian ship hàng:</p>
                <p>+ Từ 1-2 ngày trong khu vực TP.HCM.</p>
                <p>+ Từ 2-4 ngày đối với đơn ship Tỉnh. </p>

            </div>
        </div>


        <div className={cx("form-cmt")}>
            <h2>Viết Bình Luận</h2>

            <div className={cx("box-form",)}>
                <form className={cx()} onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-12">
                            <div className={cx("form-group",)}>
                                <input
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}

                                    type="text"
                                    className={cx("form-control")}
                                    placeholder="Tên của Bạn"
                                />

                                {formik.errors.name && formik.touched.name && (
                                    <p className={cx("warning")}>
                                        {formik.errors.name}</p>)}
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-12">
                            <div className={cx("form-group",)}>
                                <input
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}

                                    type="text"
                                    className={cx("form-control")}
                                    placeholder="Email của Bạn"
                                />

                                {formik.errors.email && formik.touched.email && (
                                    <p className={cx("warning")}>
                                        {formik.errors.email}</p>)}
                            </div>
                        </div>
                    </div>

                    <div className={cx()}>
                        <textarea
                            name="comment"
                            value={formik.values.comment}
                            onChange={formik.handleChange}
                            ref={text}
                            cols="40"
                            type="text"
                            className={cx("form-control", "content-cmt")}
                            placeholder="Viết bình luận"
                        ></textarea>



                        <span>
                            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                        </span>
                    </div>


                    <div className={cx("sub-form-cmt")}>
                        <span>Bình luận của bạn sẽ được duyệt trước khi đăng lên</span>

                        <button className={cx("sub-form")}>Gửi bài viết</button>

                    </div>
                </form>
                <h5 className={cx("show-detail")}
                    onClick={() => setPage(true)}
                >
                    <Link to="/sizeChat"
                    >
                        Thu gọn
                        <BsArrowRight className={cx("show-box")} />
                    </Link>
                </h5>



                {useCom.length > 0 ?
                    <div className={cx("contai-cmt")}>

                        <h1>Bình luận :</h1>
                        {
                            useCom.map((use, index) => {
                                return <div className={cx("cmt-box")}
                                    key={index}
                                >
                                    <div className={cx("cmt-group")}>
                                        <h4>{use.name}</h4>
                                        <p>{use.comment}</p>
                                        <span
                                            className={cx("sent-cmt")}
                                            onClick={() => { text.current.focus() }}
                                        >trả lời</span>
                                    </div>
                                </div>
                            })

                        }
                    </div>
                    :
                    undefined}
            </div>
        </div>
    </div>
}

export default DetailSize;