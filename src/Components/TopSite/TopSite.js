import './TopSite.css'
import {Link} from "react-router-dom";
import telegram from '../../img/telegram.png'
import instagram from '../../img/instagram_2.png'

const TopSite = () => {
    return <div className={'top-site'}>
        <div className={'container-list-topSite'}>
            <ul className={'listTop-site'}>
                <li><Link to={'/'}>خرید قهوه</Link></li>
                <li><Link to={'/'}>انواع قهوه</Link></li>
                <li><Link to={'/'}>تماس با ما</Link></li>
            </ul>
        </div>
        <div className={'box-icon'}>
            <Link to={'/'}><img src={telegram} alt="logoTelegram"/></Link>
            <Link to={'/'}><img src={instagram} alt="logoInstagram"/></Link>
        </div>
    </div>
}
export default TopSite