import './ProductNew.css'
import {Link} from "react-router-dom";

const ProductNew = (props) => {
    // console.log(props)
    return <div className={'box-product'}>
        <Link to={props.link}>
            <div className={"img-container"}>
                <img src={props.src} alt=""/>
            </div>
        </Link>
        <div className={'container-price-title'}>
            <div className="title">
                <h4>{props.title}</h4>
            </div>
            <div className="price">
                <h5>{props.price} ریال</h5>
            </div>
        </div>

    </div>
}
export default ProductNew