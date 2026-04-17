import styles from './Footer.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';
import Social from '@/shared/ui/social/Social';

import { navLinks } from '@/shared/data/navLinks';
import arrowUp from '@/shared/assets/icons/arrow-up.svg';

import logoGradient from '@/shared/assets/icons/logo-gradient.svg';

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      title: 'Навигация',
      links: navLinks,
    },
    {
      id: 2,
      title: 'Реквизиты',
      isText: true, // Флаг для рендера обычного текста вместо ссылок
      links: [
        { name: 'ИП Мигушев Никита Николаевич' },
        { name: 'ОГРНИП 324774600786201' },
        { name: 'ИНН 860318721702' },
        { name: 'Банк МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК"' },
        { name: 'БИК 044525092' },
        { name: 'К/c 30101810645250000092' },
        { name: 'Счёт 40802810070010477433' },
      ],
    },
    {
      id: 3,
      title: 'Контакты:',
      links: [
        { name: 'hello@lightanalytics.ru', href: 'mailto:hello@lightanalytics.ru' },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
                      href="https://lightanalytics.ru/login"
                  />
                  <Button
                      variant="largeWhite"
                      text="Войти"
                      href="https://lightanalytics.ru/reg"
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
                        {column.links.map((link, index) => (
                            <li key={index}>
                              {column.isText ? (
                                  <span style={{ opacity: 0.6 }}>{link.name}</span>
                              ) : (
                                  <a href={link.href || '#'}>{link.name}</a>
                              )}
                            </li>
                        ))}
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