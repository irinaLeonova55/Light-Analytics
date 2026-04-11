import styles from './Header.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';
import Menu from '@/shared/ui/Menu/Menu';

import logoWhite from '@/shared/assets/icons/logo-white.svg';
import burger from '@/shared/assets/icons/burger.svg';

const Header = ({ setIsBurger }) => {
  return (
    <header className={styles.header}>
      <Container size="default">
        <div className={styles.headerContainer}>
          <div className={styles.menuWrapper}>
            <Menu section="menuHeader" />
          </div>
          {/*<nav>
            <ul className={styles.menu}>
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>*/}
          <div className={styles.logoHeader}>
            <img src={logoWhite} alt="Light Analitics" />
          </div>

          <div className={styles.btnWrapper}>
            <Button
              variant="littleGrey"
              text="Вход"
              href="https://lightanalytics.ru/login"
            />
            <Button
              variant="littleWhite"
              text="Регистрация"
              href="https://lightanalytics.ru/reg"
            />
          </div>
          <div className={styles.burgerIconWrapper}>
            <button className={styles.burgerIcon}>
              <img
                src={burger}
                alt="Открыть меню"
                onClick={() => setIsBurger(true)}
              />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
