import { useFormik } from "formik"
import * as Yup from "yup"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "~/until/firebase"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classNames from "classnames/bind"
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);

function Register({ handleLogin }) {
    const notify = () => toast.success("Create account success.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifyW = (e) => toast.warn(e, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const onSubmit = async (email, password, resetForm) => {

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential;
                // console.log(user);
                if (userCredential) {
                    notify()
                    handleLogin()
                    resetForm({ value: "" })

                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (error) {
                    notifyW(error.message)
                    return error
                }

            });


    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Vui lòng nhập trường này."),
            email: Yup.string()
                .required("Vui lòng nhập tên của bạn.")
                .email("Nhập đúng email của của bạn."),
            password: Yup.string()
                .required("Vui lòng nhập mật khẩu của bạn.")
                .min(8, "Độ dài tối thiểu là 8 kí tự."),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Mật khẩu nhập lại không chính xác!')
                .required('Vui lòng nhập trường này')
        }),
        onSubmit: (values, { resetForm }) => {
            onSubmit(values.email, values.password, resetForm)
            // console.log(values)
            // resetForm({ value: "" })
            // handleLogin()
        }
    })

    // console.log(formik.onSubmit)
    return <div className={cx("style-login")}>
        <h5>Đăng ký</h5>
        <div className={cx("register")}>
            <form onSubmit={formik.handleSubmit}>
                {/* name */}
                <div className={cx("iteamInput")}>
                    <label htmlFor={"name1"}>Họ Và Tên</label>
                    <input
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="name"
                        id="name1"
                        type="text"
                        placeholder=""
                        className="fullname-sub"
                    />
                    {formik.errors.name && formik.touched.name && (
                        <p className={cx("warning")}>{formik.errors.name}</p>)}
                </div>
                {/* email */}

                <div className={cx("iteamInput")}>
                    <label htmlFor={"email1"}>Email</label>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="email"
                        id="email1"
                        type="text"
                        placeholder=""
                        className="fullname-sub"
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p className={cx("warning")}>{formik.errors.email}</p>)}
                </div>
                {/* mật khẩu */}
                <div className={cx("iteamInput")}>
                    <label htmlFor={"password1"}>Mật khẩu</label>
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="password"
                        id="password1"
                        type="text"
                        placeholder=""
                        className="fullname-sub"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p className={cx("warning")}>{formik.errors.password}</p>)}
                </div>
                {/* nhập lại mật khẩu */}
                <div className={cx("iteamInput")}>
                    <label htmlFor={"confirm1"}>Nhập Lại Mật Khẩu</label>
                    <input
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="confirmPassword"
                        id="confirm1"
                        type="text"
                        placeholder=""
                        className="fullname-sub"
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <p className={cx("warning")}>{formik.errors.confirmPassword}</p>)}
                </div>

                <div className={cx("sub-form")}>
                    <button className={cx("sub-btn")}
                    // onClick={handleLogin}
                    >
                        Đăng ký
                    </button>
                </div>


            </form>
        </div>
    </div>
}

export default Register