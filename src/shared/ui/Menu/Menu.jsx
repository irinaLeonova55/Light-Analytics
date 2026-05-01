import styles from './Menu.module.scss';
import {navLinks} from '@/shared/data/navLinks';
import {Link, useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Menu = ({ section, onClick, onSupportClick }) => {
    const location = useLocation();

    const isHome = location.pathname === '/promo' || location.pathname === '/promo/';

    const handleSupportClick = () => {
        if (onSupportClick) onSupportClick(); // Открываем модалку
        if (onClick) onClick(); // Закрываем бургер-меню, если оно открыто
    };

    return (
        <nav>
            <ul className={`${styles[section]}`}>
                {navLinks.map((link) => {
                    const isSmooth = isHome;
                    const targetPath = isHome
                        ? link.href.substring(link.href.indexOf('#'))
                        : link.href;

                    return (
                        <li key={link.id}>
                            <HashLink
                                {...(isSmooth ? { smooth: true } : {})}
                                to={targetPath}
                                onClick={onClick}
                                scroll={(el) => isSmooth
                                    ? el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    : window.scrollTo(0, el.offsetTop)
                                }
                            >
                                {link.name}
                            </HashLink>
                        </li>
                    );
                })}

                <li className={styles.dropdown}>
                    <span className={styles.dropdownTitle}>
                        Документы <span className={styles.arrow}>▾</span>
                    </span>
                    <ul className={styles.dropdownMenu}>
                        <li><Link to="/promo/public-offer" onClick={onClick}>Публичная оферта</Link></li>
                        <li><Link to="/promo/privacy" onClick={onClick}>Политика конфиденциальности</Link></li>
                        <li><Link to="/promo/cookie" onClick={onClick}>Использование cookie</Link></li>
                        <li><Link to="/promo/tech-support-policy" onClick={onClick}>Правила техподдержки</Link></li>
                    </ul>
                </li>

                {/* Новый пункт Поддержка */}
                <li className={styles.supportItem}>
                    <button
                        className={styles.supportBtn}
                        onClick={handleSupportClick}
                    >
                        Поддержка
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;