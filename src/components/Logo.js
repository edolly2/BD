import style from './Logo.module.css'
import logo from './images/bd-logo.svg';

const Logo = () => {
    return (
        <div className={style.logoCont}>
            <img className="logo" src={ logo } alt="Bailey Demolition Logo"/>
            <p className={style.logoText}>Bailey Demolition</p>
        </div>
    );
}

export default Logo;