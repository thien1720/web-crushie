import { useState, useContext, useEffect } from "react"
import { Link, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsXLg, BsChevronRight, BsBoxArrowRight } from "react-icons/bs";
import classNames from "classnames/bind"
import styles from "./NavBar.module.scss";
import { signOut } from "firebase/auth";

import { auth } from "~/until/firebase"
import { themContext } from "~/Default"
const cx = classNames.bind(styles);


function NavBar(props) {
    const { handleLogin } = props

    const productIteam = useContext(themContext)
    useEffect(() => {
        const name = localStorage.getItem("user")

        // onAuthStateChanged(auth, (user) => {
        //     if (user) {

        //         // User is signed in, see docs for a list of available properties
        //         // https://firebase.google.com/docs/reference/js/firebase.User
        //         console.log(user.email.split("@")[0])
        //         const uid = user.uid;

        //     } else {
        //         console.log("user is logged out")
        //     }
        // });

    }, [])

    function handleFilter(props, props1, props2) {
        const updateCart = productIteam.cards.filter((x) => x.title.includes(props))
        const updateCart1 = productIteam.cards.filter((x) => x.title.includes(props1))
        const updateCart2 = productIteam.cards.filter((x) => x.title.includes(props2))

        return productIteam.setFilter(updateCart.concat(updateCart1, updateCart2))
    }
    const [showNav, setShowNav] = useState(false)
    const [showNav1, setShowNav1] = useState(false)

    const nav = props.nav;
    const setNav = props.setNav

    function handleClose(e) {
        setNav(!nav)
    }

    function handleShowNav1(e) {
        e.stopPropagation()
        setShowNav1(!showNav1)
    }

    function handleShowNav(e) {
        e.stopPropagation()
        setShowNav(!showNav)
    }

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
    function handleLogout() {
        signOut(auth).then((e) => {
            console.log(e)
            // Sign-out successful.
            notify("Signed out successfully")
            localStorage.removeItem("user")
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }

    const nameUser = localStorage.getItem("user")


    return <div className={cx(nav ? "overlay-side" : undefined)}
        onClick={handleClose}
    >
        <div className={cx(nav ? ("box-header") : "box-header-show", "box-header")}

        >
            <div className={cx("head-side-bar")}>
                <div className={cx("close-side-bar")}
                    onClick={handleClose}
                ><BsXLg className={cx("style-head", "style-icon")} /></div>
                <div className={cx("nav-text-head")}> <p className={cx("style-head", "title-head")}>Mục lục</p></div>

            </div>

            <div className={cx("list-page")}>
                <div className={cx("info-user")}>
                    <img src="eternity/avartar-user.jpg" alt="avartar" />
                    <p>{nameUser ? nameUser : "Vui lòng đăng nhập"}</p>
                </div>
                <ul>
                    <li>
                        <NavLink to="/" className={(nav) => cx("next-page", { active: nav.isActive })}>Eternity </NavLink>
                    </li>

                    <li>
                        <div className={cx("page-shop")}

                        >
                            <p className={cx("next-page", "style-nav-page")}
                                onClick={handleShowNav}

                            >Shop
                                <BsChevronRight className={cx("icon-nav-page")} />
                            </p>

                            <div className={cx("page-nav-contact", showNav ? "show-nav" : "")}>
                                <div >

                                    <ul>
                                        <li onClick={(e) => {
                                            productIteam.setFilter(productIteam.cards)
                                        }

                                        }>
                                            <Link to="/shops">All</Link>
                                        </li>
                                        <li onClick={(e) => {
                                            e.preventDefault()
                                            return handleFilter("TEE")
                                        }}>
                                            <Link to="/shops"> TSHIRT</Link>
                                        </li>

                                        <li onClick={(e) => {
                                            e.preventDefault()
                                            return handleFilter("HOODIE", "VARSI", "JACKET")
                                        }}>
                                            <Link to="/shops"
                                            >HOODIE - VARSITY - JACKET
                                            </Link>
                                        </li>

                                        <li onClick={(e) => {
                                            e.preventDefault()
                                            return handleFilter("TEE", "SHIRT")
                                        }}>
                                            <Link to="/shops"
                                            // onClick={handleFilter("TEE SHIRT")}
                                            >Shirt</Link>
                                        </li>

                                        <li onClick={(e) => {
                                            e.preventDefault()
                                            return handleFilter("Short")
                                        }}>
                                            <Link to="/shops"> Short Eternity</Link>
                                        </li>

                                        <li
                                            onClick={(e) => {
                                                e.preventDefault()
                                                return handleFilter("CAP", "Balo")
                                            }}
                                        ><Link to="/shops" >ACCESSORIES</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <NavLink to="/sizeChat" className={(nav) => cx("next-page", { active: nav.isActive })}>Size Chart </NavLink>
                    </li>

                    <li>
                        <div className={cx("page-about")}

                        >
                            <p className={cx("next-page")}
                                onClick={handleShowNav1}
                            >
                                <NavLink to="/abouts" className={(nav) => cx("next-page", "style-nav-page", { active: nav.isActive })}>
                                    About Us
                                    <BsChevronRight className={cx("icon-nav-page")} />
                                </NavLink>
                            </p>
                            <div className={cx("page-nav-contact", showNav1 ? "show-nav" : "")}>
                                <div >
                                    <ul>
                                        <li> <Link to="/payment" >Phương Thức Thanh Toán</Link></li>
                                        <li><Link to="/shops" > Sản phẩm</Link></li>
                                        <li> <Link to="/sizeChat">Bảng size chi tiết</Link></li>

                                    </ul>




                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <NavLink to="/service" className={(nav) => cx("next-page", { active: nav.isActive })}>Điều khoản và dịch vụ </NavLink>
                    </li>
                    <li>
                        <p className={cx("next-page")}
                            onClick={handleLogin}
                        >Đăng Nhập </p>
                    </li>
                    <li>
                        <p className={cx("next-page")}
                            onClick={handleLogout}
                        >Logout <BsBoxArrowRight /></p>
                    </li>
                </ul>


            </div>

        </div>
    </div>
}
export default NavBar