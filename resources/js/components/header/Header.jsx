import logo from '../../../../storage/app/public/images/icons/logo.svg'
import icon from '../../../../storage/app/public/images/icons/Icon.svg'
import './header.css';
import './media.css';

function Header() {

    return (
        <header className="header">
            <div className="container__header">
                <div className="header__row">
                    <div className="header__menu">
                        <div className="header__logo">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="header__nav">
                            <ul>
                                <li className="header__item">
                                    <a href="#!" className="header__link">Preisen</a>
                                </li>
                                <li className="header__item">
                                    <a href="#!" className="header__link">HR-Magazin</a>
                                </li>
                                <li className="header__item">
                                    <a href="#!" className="header__link">Hilfe - Center</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__actions">
                    <button className="header__btn">
                            Anzeige schalten
                        </button>
                        <div className="header__login">
                            <img src={icon} alt=""/>
                            <span>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header
