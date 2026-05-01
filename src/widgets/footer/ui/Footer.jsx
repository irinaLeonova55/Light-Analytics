import styles from './Footer.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';
import Social from '@/shared/ui/social/Social';

import { navLinks } from '@/shared/data/navLinks';
import arrowUp from '@/shared/assets/icons/arrow-up.svg';
import {Link, useLocation} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logoGradient from '@/shared/assets/icons/logo-gradient.svg';
import SupportModal from "@/widgets/support-modal/ui/SupportModal.jsx";
import {useState} from "react";

const Footer = () => {
    const location = useLocation();
    const [isSupportOpen, setIsSupportOpen] = useState(false); // Состояние для модалки

    const isHome = location.pathname === '/' || location.pathname === '/promo';

    const footerLinks = [
        {
            id: 1,
            title: 'Навигация',
            // Добавляем пункт Поддержка в конец списка навигации
            links: [
                ...navLinks,
                { name: 'Поддержка', isSupport: true }
            ],
            isNav: true,
        },
        {
            id: 2,
            title: 'Документы',
            links: [
                { name: 'Публичная оферта', href: '/promo/public-offer', isInternal: true },
                { name: 'Политика конфиденциальности', href: '/promo/privacy', isInternal: true },
                { name: 'Использование cookie', href: '/promo/cookie', isInternal: true },
                { name: 'Правила техподдержки', href: '/promo/tech-support-policy', isInternal: true },
            ],
        },
        {
            id: 3,
            title: 'Реквизиты',
            isText: true,
            links: [
                { name: 'ИП Мигушев Никита Николаевич' },
                { name: 'ОГРНИП 324774600786201' },
                { name: 'ИНН 860318721702' },
                { name: 'АО КБ "МОДУЛЬБАНК"' },
                { name: 'БИК 044525092' },
                { name: 'К/с 30101810645250000092' },
                { name: 'Счёт 40802810070010477433' },
            ],
        },
        {
            id: 4,
            title: 'Контакты:',
            links: [
                {
                    name: 'hello@lightanalytics.ru',
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
                                            if (column.isText) {
                                                return (
                                                    <li key={index}>
                                                        <span className={styles.plainText} style={{ opacity: 0.6 }}>
                                                            {link.name}
                                                        </span>
                                                    </li>
                                                );
                                            }

                                            // ОБРАБОТКА ПОДДЕРЖКИ
                                            if (link.isSupport) {
                                                return (
                                                    <li key={index}>
                                                        <button
                                                            className={styles.link}
                                                            onClick={() => setIsSupportOpen(true)}
                                                            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
                                                        >
                                                            {link.name}
                                                        </button>
                                                    </li>
                                                );
                                            }

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

                                            if (link.isInternal) {
                                                return (
                                                    <li key={index}>
                                                        <Link to={link.href} className={styles.link}>
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                );
                                            }

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

            {/* Рендерим модалку. Благодаря порталу она будет в корне body */}
            <SupportModal
                isOpen={isSupportOpen}
                onClose={() => setIsSupportOpen(false)}
            />
        </footer>
    );
};

export default Footer;