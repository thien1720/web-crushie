import { useContext } from "react"
import { Link } from "react-router-dom"
import {BsXCircle} from "react-icons/bs"
import Popup from 'reactjs-popup';

import { themContext } from "~/Default"
import Filter from "~/components/Filter"
import Loading from "~/components/Loading"
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
const cx = classNames.bind(styles);


function Product() {
    const productIteam = useContext(themContext)

    function ShowHeartDone(){
        productIteam.closeHeart()
        productIteam.handleShowHeart()
    }

    return <div className={cx("product")}>
         <div className={cx("module-select-option")}>
                <Popup open={productIteam.popHeart} closeOnDocumentClick onClose={productIteam.closeHeart}>
                    <div className={cx("heat-popup")}>
                        <p
                            
                        ><BsXCircle className={cx("close")} 
                        onClick={
                            productIteam.closeHeart
                        }
                        /></p>
                        <div className={cx("heart-description")}>
                            Sản phẩm đã được thêm vào danh sách yêu thích.
                        </div>
                        <div className={cx("done-heart")}>
                            <button 
                                className={cx("selec-close")}
                                onClick={ShowHeartDone}
                            >
                                Danh sách yêu thích
                            </button>
                        </div>

                    </div>
                </Popup>
            </div>

        <div className={cx("product-page-nav", "container")}>
            <Link to="/" className={cx("bread-page")}>Trang Chủ</Link>
            <Link to="/shop" className={cx("bread-page", "active")}>Sản Phẩm</Link>
        </div>

        <div className={cx("colections", "container")}>
            <div className={cx("section-navigation")}>
                <select className={cx("section")}
                    onChange={(e) => {

                        switch (e.target.value) {
                            case ("Giá: Tăng dần"):
                                
                                return productIteam.handleFilterCoin("coin")

                            case ("Giá: Giảm dần"):
                             
                                return productIteam.handleFilterCoin("coin", "desc")

                            case ("Tên: A-Z"):
                                
                                return productIteam.handleFilterCoin("title")

                            case ("Tên: Z-A"):
                                
                                return productIteam.handleFilterCoin("title", "desc")
                            default:
                                return productIteam.filter
                        }
                    }}
                >
                    <option className={cx("option")} value="sản phẩm nổi bật"

                    >Sản phẩm nổi bật.</option>

                    <option className={cx("option")} value="Giá: Tăng dần"

                    >Giá: Tăng dần</option>

                    <option className={cx("option")} value="Giá: Giảm dần"

                    >Giá: Giảm dần</option>

                    <option className={cx("option")} value="Tên: A-Z"

                    >Tên: A-Z</option>

                    <option className={cx("option")} value="Tên: Z-A"

                    >Tên: Z-A</option>
                </select>
            </div>
            <div className={cx("colection-list-iteam")}>
                <div className={cx("layout-iteams", "row")}>
                    {productIteam.load ? <Loading /> : <Filter filter={productIteam.filter} />}
                </div>
            </div>
           
        </div>

    </div>;
}

export default Product;