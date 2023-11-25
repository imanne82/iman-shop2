import './Header.css'
import Logo from '../../img/logo.png'
import {Link} from "react-router-dom"
import searchIcon from '../../img/search.png'
import cartIcon from '../../img/shopping_cart.png'
import TopSite from "../TopSite/TopSite";
import Nav from "../Navbar/Nav";

const Header = () => {
    return <header id={"header"}>
        <TopSite></TopSite>
        <div className={'container-header'}>
        <div className={'logo'}>
            <Link to={'/'} className={'siteLogo'}>
                <img src={Logo} alt="logo"/>
            </Link>
        </div>
        <div className={'cart-register'}>
            <Link to={'/register'}>ورود / ثبت نام</Link>
            <Link to={'/'}><img src={searchIcon} alt="searchLogo"/></Link>
            <Link to={'/'}><img src={cartIcon} alt="searchLogo"/></Link>
        </div>
    </div>
    <Nav></Nav>
</header>
}
export default Header