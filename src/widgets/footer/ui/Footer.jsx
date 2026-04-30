import styles from './Footer.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';
import Social from '@/shared/ui/social/Social';

import { navLinks } from '@/shared/data/navLinks';
import arrowUp from '@/shared/assets/icons/arrow-up.svg';
import {Link, useLocation} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logoGradient from '@/shared/assets/icons/logo-gradient.svg';

const Footer = () => {
    const location = useLocation();

    // Определяем, находимся ли мы на главной/промо
    const isHome = location.pathname === '/' || location.pathname === '/promo';

    const footerLinks = [
        {
            id: 1,
            title: 'Навигация',
            links: navLinks,
            isNav: true, // Флаг для использования HashLink
        },
        {
            id: 2,
            title: 'Документы',
            links: [
                { name: 'Публичная оферта', href: '/public-offer', isInternal: true },
                { name: 'Политика конфиденциальности', href: '/privacy', isInternal: true },
            ],
        },
        {
            id: 3,
            title: 'Реквизиты',
            isText: true,
            links: [
                { name: 'ИП Мигушев Никита Николаевич' }, //
                { name: 'ОГРНИП 324774600786201' }, //
                { name: 'ИНН 860318721702' }, //
                { name: 'АО КБ "МОДУЛЬБАНК"' }, //
                { name: 'БИК 044525092' }, //
                { name: 'К/с 30101810645250000092' }, //
                { name: 'Счёт 40802810070010477433' }, //
            ],
        },
        {
            id: 4,
            title: 'Контакты:',
            links: [
                {
                    name: 'hello@lightanalytics.ru', //
                    href: 'mailto:hello@lightanalytics.ru',
                },
            ],
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <Container size="cards">
                <div className={styles.footerWrapper}>
                    <div className={styles.footerUp}>
                        <div className={styles.footerLeft}>
                            <img src={logoGradient} alt="Light Analytics" />
                            <div className={styles.footerBtnWrapper}>
                                <Button
                                    variant="largePurple"
                                    text="Создать аккаунт"
                                    href="https://lightanalytics.ru/reg"
                                />
                                <Button
                                    variant="largeWhite"
                                    text="Войти"
                                    href="https://lightanalytics.ru/login"
                                />
                            </div>
                            <div className={styles.socialWrapperMobile}>
                                <Social />
                            </div>
                        </div>

                        <div className={styles.footerLinks}>
                            {footerLinks.map((column) => (
                                <div key={column.id} className={styles.navigation}>
                                    <h4 className={styles.title}>{column.title}</h4>
                                    <ul className={styles.footerList}>
                                        {column.links.map((link, index) => {
                                            // Логика для текстовых реквизитов
                                            if (column.isText) {
                                                return (
                                                    <li key={index}>
                                                        <span className={styles.plainText} style={{ opacity: 0.6 }}>
                                                            {link.name}
                                                        </span>
                                                    </li>
                                                );
                                            }

                                            // Логика для навигации по секциям (Функции, Тарифы и т.д.)
                                            if (column.isNav) {
                                                const targetPath = isHome
                                                    ? link.href.replace(/^\/[^#]*/, '')
                                                    : link.href;

                                                return (
                                                    <li key={index}>
                                                        <HashLink
                                                            {...(isHome ? { smooth: true } : {})}
                                                            to={targetPath}
                                                            className={styles.link}
                                                            scroll={(el) => isHome
                                                                ? el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                                                : window.scrollTo(0, el.offsetTop)
                                                            }
                                                        >
                                                            {link.name}
                                                        </HashLink>
                                                    </li>
                                                );
                                            }

                                            // Логика для внутренних страниц (Оферта, Политика)
                                            if (link.isInternal) {
                                                return (
                                                    <li key={index}>
                                                        <Link to={link.href} className={styles.link}>
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                );
                                            }

                                            // По умолчанию (Email и прочее)
                                            return (
                                                <li key={index}>
                                                    <a href={link.href || '#'} className={styles.link}>
                                                        {link.name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ))}

                            <button className={styles.btnUp} onClick={scrollToTop}>
                                <img src={arrowUp} alt="Наверх" />
                            </button>
                        </div>
                    </div>

                    <div className={styles.footerDown}>
                        <span className={styles.year}>
                          © 2026 LightAnalytics. Все права защищены
                        </span>
                        <div className={styles.socialWrapper}>
                            <Social />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;