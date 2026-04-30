import styles from './Menu.module.scss';
import {navLinks} from '@/shared/data/navLinks';
import {Link, useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Menu = ({ section, onClick }) => {
    const location = useLocation();
    const isHome = location.pathname === '/' || location.pathname === '/promo';

    const docLinks = [
        { id: 1, href: '/public-offer', name: 'Публичная оферта' },
        { id: 2, href: '/privacy', name: 'Политика конфиденциальности' },
    ];

    return (
        <nav>
            <ul className={`${styles[section]}`}>
                {navLinks.map((link) => {
                    const isSmooth = isHome;
                    const targetPath = isHome
                        ? link.href.replace(/^\/[^#]*/, '')
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

                {/* Выпадающий список Документы */}
                <li className={styles.dropdown}>
                    <span className={styles.dropdownTitle}>
                        Документы <span className={styles.arrow}>▾</span>
                    </span>
                    <ul className={styles.dropdownMenu}>
                        {docLinks.map((doc) => (
                            <li key={doc.id}>
                                <Link to={doc.href} onClick={onClick}>
                                    {doc.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;