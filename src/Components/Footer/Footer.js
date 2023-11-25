import './Footer.css'
import img from '../../img/enamad.png'
import {Link} from "react-router-dom";

const Footer = () => {
    return <footer id='footer'>
        <section>
            <div className='container-account-contact'>
                <div className='account'>
                    <h4>حساب کاربری</h4>
                    <ul>
                        <li><Link to={'/'}>پنل کاربری</Link></li>
                        <li><Link to={'/'}>راهنمای خرید</Link></li>
                        <li><Link to={'/'}>پیگیری سفارش</Link></li>
                    </ul>
                </div>
                <div className='contact'>
                    <h4>تماس با ما</h4>
                    <ul>
                        <li><Link to={'/'}>تلگرام : 09305215922</Link></li>
                        <li><Link to={'/'}>شماره تلفن : 09305215922</Link></li>
                    </ul>
                </div>
            </div>
            <div className='img'>
                <h4>نماد الکترونیکی</h4>
                <img src={img} alt=""/>
            </div>
        </section>
    </footer>
}
export default Footer