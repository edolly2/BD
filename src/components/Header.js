import style from './Header.module.css'
import Logo from './Logo';
import { CgMenuGridR } from 'react-icons/cg';


const Header = () => {
    return (
        <header className={style.header}>
            <Logo className="logo"/>
            <CgMenuGridR className={style.hamburgerIcon}/>
            
        </header>
    );
}

export default Header;