import './Nav.css'
import {Link} from "react-router-dom";
import img from '../../img/line-angle-down-icon.svg'
import {useState} from "react";

const Nav = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const mouseHandler = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };
    const bgHandler = () => {
        setActiveMenu(null);
    }
    return (
        <nav className={'navbar'}>
            <div id="bg" onClick={bgHandler} style={{display: activeMenu ? 'block' : 'none'}}></div>
            <ul className={'menu'}>
                <li className={'menuItem'} onClick={() => mouseHandler('menu1')}>
                    <div className={'titleMenu'}>خرید قهوه<img
                        src={img} alt=""/></div>
                    <ul style={{display: activeMenu === 'menu1' ? 'block' : 'none'}}>
                        <li><Link to={'/'}>دانه قهوه</Link></li>
                        <li><Link to={'/'}>خرید قهوه</Link></li>
                        <li><Link to={'/'}>قهوه دمی</Link></li>
                        <li><Link to={'/'}>قهوه اسپرسو</Link></li>
                    </ul>
                </li>
                <li className={'menuItem'} onClick={() => mouseHandler('menu2')}>
                    <div className={'titleMenu'}>محصولات ما<img
                        src={img} alt=""/></div>
                    <ul style={{display: activeMenu === 'menu2' ? 'block' : 'none'}}>
                        <li><Link to={'/'}>قهوه تک خاستگاه</Link></li>
                        <li><Link to={'/'}> قهوه بلند و ترکیبی</Link></li>
                        <li><Link to={'/'}>قهوه ترک</Link></li>
                        <li><Link to={'/'}>چای و دمنوش</Link></li>
                    </ul>
                </li>
                <li className={'menuItem'} onClick={() => mouseHandler('menu3')}>
                    <div className={'titleMenu'}>انواع قهوه<img
                        src={img} alt=""/></div>
                    <ul style={{display: activeMenu === 'menu3' ? 'block' : 'none'}}>
                        <li><Link to={'/'}>دانه قهوه</Link></li>
                        <li><Link to={'/'}>خرید قهوه</Link></li>
                        <li><Link to={'/'}>قهوه دمی</Link></li>
                        <li><Link to={'/'}>قهوه اسپرسو</Link></li>
                    </ul>
                </li>

            </ul>

        </nav>

    );
};

export default Nav