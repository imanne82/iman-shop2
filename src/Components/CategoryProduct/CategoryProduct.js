import './CategoryProduct.css'
import {Link} from "react-router-dom";

const CategoryProduct = (props) => {
    return <div className={'box-pro'}>
        <div className={'titer-pro'}>
            <h1>{props.title}</h1>
        </div>
        <div className={'img-pro'}>
            <Link to={'/'}><img src={props.imgSrc} alt={props.title}/></Link>
        </div>
    </div>
}
export default CategoryProduct