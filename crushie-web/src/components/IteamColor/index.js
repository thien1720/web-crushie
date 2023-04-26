import { v4 as uuidv4 } from 'uuid';

import classNames from "classnames/bind";
import styles from "./IteamColor.module.scss";
const cx = classNames.bind(styles);

function IteamColor(props) {
    const option = props.optionColor
    const border = props.selecColor
    const Click = props.onClick
    const key = props.key
    // console.log(props)
    return <>
        <div  className={cx("color-grid" )}
            onClick={Click}
            // key={uuidv4()}
        >
            <span 
                className={cx( "style-color" ,
                option ? option : "no-color" ,
                border === option ? "border" : ""
                )}
            >

            </span>
        </div>
    </>
}

export default IteamColor