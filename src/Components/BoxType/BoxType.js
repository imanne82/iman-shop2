import './BoxType.css'
import {Link} from "react-router-dom";


const BoxType = (props) => {
    return <div className={'box-type'}>
        <Link to={'/'}><img src={props.src} alt="قهوه خوب"/></Link>
    </div>

}
export default BoxType