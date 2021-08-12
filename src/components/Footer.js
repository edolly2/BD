import style from './Footer.module.css';
import { AiFillFacebook } from 'react-icons/ai'


const Footer = () => {
    return (
        <footer>
            <div className={style.socialMediaCont}>
                <AiFillFacebook/>
            </div>
        </footer>
    );
}

export default Footer;