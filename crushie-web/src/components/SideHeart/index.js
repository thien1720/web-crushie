import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsXLg } from "react-icons/bs";
import classNames from "classnames/bind"

import Heart from "~/components/ShowHeart"
import { removeHeart } from "~/store/reducers/option.slice"
import styles from "./NavBar.module.scss";

const cx = classNames.bind(styles);


function ShowHeart(props) {

    const cartHeart = useSelector((state) => state.heart)
    const heart = props.heart;
    const setHeart = props.setHeart

    function handleClose() {
        setHeart(!heart);
    }
    // console.log(cartHeart)
    return <div className={cx(heart ? "overlay-show" : undefined)}
        onClick={handleClose}
    >
        <div className={cx(heart ? ("box-header") : "box-header-show", "box-header")}>
            <div className={cx("head-side-bar")}>
                <div className={cx("close-side-bar")}
                    onClick={handleClose}
                ><BsXLg className={cx("style-head", "style-icon")} /></div>
                <div className={cx("nav-text-head")}> <p className={cx("style-head", "title-head")}>Danh sách yêu thích</p></div>

            </div>

            <div className={cx("list-page")}>
                <ul>
                    <li>
                        {cartHeart.map((heart, index) => { return <Heart key={index} heart={heart} /> }
                        )}
                    </li>



                </ul>
            </div>

        </div>
    </div>
}
export default ShowHeart