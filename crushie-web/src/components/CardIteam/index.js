import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { v4 as uuidv4 } from 'uuid';

import IteamColor from "../IteamColor";
import classNames from "classnames/bind";
import styles from "./CardIteam.module.scss";
const cx = classNames.bind(styles);

function CardIteam(props) {
    // console.log(props)
    return <Link to="/shops" key={uuidv4()}>
        <div className={cx("card-show-iteam")}>
            <div className={cx("product-img")}>
                <div className={cx("product-show-img")}>
                    <img src={props.image} atl="sản phẩm" className={cx("image-iteam")} />
                </div>

                <div className={cx("product-push-iteam")}>
                    <Link to="/shops">
                        <BsSearch className={cx("product-icon")} />
                    </Link>

                    <Link to="/shops">
                        <FiHeart className={cx("product-icon")} />
                    </Link>

                    <Link to="/shops">
                        <AiOutlineShopping className={cx("product-icon")} />
                    </Link>

                </div>

            </div>

            <div className={cx("product-details", props.center && "text-center")}>
                <div className={cx("product-name")}>
                    <h3 className={cx("product-title")}>
                        <Link to="/shops">
                            {props.title}
                        </Link>
                    </h3>
                </div>

                <div className={cx("product-total")}>
                    <p className={cx("product-total-iteam")}>
                        {props.coin}
                        <span className={cx("product-sale")}>
                            {props.y}
                        </span>
                    </p>
                </div>

                {props.itemColor ? <div className={cx("product-color")}>

                    <IteamColor />

                </div> : <></>}
            </div>
        </div>
    </Link>
}

export default CardIteam