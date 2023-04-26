import { useContext } from "react";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa"

import { themContext } from "~/Default"
import { removeHeart } from "~/store/reducers/option.slice"
import styles from "./ShowHeart.module.scss";

const cx = classNames.bind(styles);

function Heart(props) {
    const productIteam = useContext(themContext)

    const dispatch = useDispatch()

    let heartcoin = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(props.heart.coin);
    return <div className={cx("contai-show-heart")}>
        <div className={cx("heart-img")}>
            <img src={props.heart.listImg[0]} alt="heart" />
        </div>

        <div className={cx("heart-description")}>
            <p>{props.heart.title}</p>
            <div className={cx("detail-coin")}>
                <span>{heartcoin}</span>
                <FaRegTrashAlt className={cx("icon-remove")}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation()
                        dispatch(removeHeart(props.heart))
                    }}

                />
            </div>

        </div>
    </div>
}

export default Heart