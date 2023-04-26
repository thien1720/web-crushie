import { useState } from "react";
import { BsX } from "react-icons/bs"
import LoginForm from "./login";
import Register from "./register";
import classNames from "classnames/bind"
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);

const iteamTabs = ["Đăng nhập", "Đăng ký"]

function Login({ login, handleLogin }) {

    const [tabs, setTab] = useState("Đăng nhập")

    return <div className={cx(login ? "over-lay" : "")}
        onClick={handleLogin}

    >
        <div className={cx("box-login")}

        >
            <div className={cx("form-login", "container")}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={cx("style-grid", "row")}>

                    <div className="col-lg-3 col">
                        <div className={cx("next-form")}>
                            <div className={cx("logo-brand")}>
                                <img src="/eternity/banner-4.webp" alt="" />
                            </div>

                            <div className={cx("next-login-reggis")}>
                                {iteamTabs.map(tab => {

                                    return <p
                                        className={cx(tab == tabs ? "style-tab" : undefined)}
                                        key={tab}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setTab(e.target.innerText)

                                        }}
                                    >{tab}</p>
                                })
                                }
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-9 col">
                        <div className={cx("form")}>
                            <p><BsX className={cx("icon-close-login")}
                                onClick={handleLogin}
                            /></p>

                            {tabs == "Đăng ký" ? <Register handleLogin={handleLogin} /> : <LoginForm handleLogin={handleLogin} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login