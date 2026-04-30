import styles from './Menu.module.scss';
import {navLinks} from '@/shared/data/navLinks';
import {Link, useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Menu = ({ section, onClick }) => {
    const location = useLocation();

    // Проверяем, находимся ли мы на главной странице промо
    const isHome = location.pathname === '/promo' || location.pathname === '/promo/';

    return (
        <nav>
            <ul className={`${styles[section]}`}>
                {navLinks.map((link) => {
                    const isSmooth = isHome;

                    // ВАЖНО: Если мы на главной, оставляем только #id (без / и без /promo)
                    // Было: /promo/#solutions -> Стало: #solutions
                    const targetPath = isHome
                        ? link.href.substring(link.href.indexOf('#'))
                        : link.href;

                    return (
                        <li key={link.id}>
                            <HashLink
                                {...(isSmooth ? { smooth: true } : {})}
                                to={targetPath}
                                onClick={onClick}
                                // Плавный скролл только внутри промо
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
                        {/* Для документов всегда используем обычный Link */}
                        <li><Link to="/promo/public-offer" onClick={onClick}>Публичная оферта</Link></li>
                        <li><Link to="/promo/privacy" onClick={onClick}>Политика конфиденциальности</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;