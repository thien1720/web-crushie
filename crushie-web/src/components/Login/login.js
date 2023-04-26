import { useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from "~/until/firebase"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classNames from "classnames/bind"
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);


function LoginForm({ handleLogin }) {

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/firebase.User
    //             // console.log(user)
    //             const name = user.email.split("@")[0];
    //             localStorage.setItem('user', name);
    //         } else {
    //             console.log("user is logged out")
    //         }
    //     });

    // }, [])
    const notify = (e) => toast.success(e, {
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

    const onLogin = (email, password, resetForm) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                notify("Login success.")
                handleLogin()
                resetForm({ value: "" })
                const name = user.email.split("@")[0];
                localStorage.setItem('user', name);
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                notifyW(error.message)
            });
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Vui lòng nhập tên của bạn.")
                .email("Nhập đúng email của của bạn."),
            password: Yup.string()
                .required("Vui lòng nhập mật khẩu của bạn.")
                .min(8, "Độ dài tối thiểu là 8 kí tự.")
        }),
        onSubmit: (values, { resetForm }) => {
            // resetForm({ value: "" })
            // handleLogin()
            // console.log(values)
            onLogin(values.email, values.password, resetForm)
        }
    })
    return <div className={cx("style-login")}>
        <h5>Đăng nhập</h5>
        <div className={cx("form-login")}>
            <form onSubmit={formik.handleSubmit}>
                <div className={cx("iteamInput")}>
                    <label htmlFor={"email"}>Email</label>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="email"
                        type="text"
                        placeholder=""
                        className="fullname-sub"
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p className={cx("warning")}>{formik.errors.email}</p>)}
                </div>

                <div className={cx("iteamInput")}>
                    <label htmlFor={'password'}>Mật Khẩu</label>
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="password"
                        type="text"
                        placeholder=""
                        className="fullname-sub"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p className={cx("warning")}>{formik.errors.password}</p>)}

                </div>



                <div className={cx("sub-form")}>
                    <button className={cx("sub-btn")}
                    // onClick={handleLogin}
                    >
                        Đăng nhập
                    </button>
                </div>

            </form>
        </div>
    </div>
}

export default LoginForm;