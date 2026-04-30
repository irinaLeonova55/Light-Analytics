import styles from './Header.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';
import Menu from '@/shared/ui/Menu/Menu';

import logoWhite from '@/shared/assets/icons/logo-gradient.svg';
import burger from '@/shared/assets/icons/burger.svg';

const Header = ({ setIsBurger }) => {
  return (
      <header className={styles.header}>
        <Container size="default">
          <div className={styles.headerContainer}>
            {/* 1. Логотип теперь первый */}
            <div className={styles.logoHeader}>
              <a href="/">
                <img src={logoWhite} alt="Light Analytics" />
              </a>
            </div>

            {/* 2. Меню в центре */}
            <div className={styles.menuWrapper}>
              <Menu section="menuHeader" />
            </div>

            {/* 3. Кнопки справа */}
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
              <button className={styles.burgerIcon} onClick={() => setIsBurger(true)}>
                <img src={burger} alt="Открыть меню" />
              </button>
            </div>
          </div>
        </Container>
      </header>
  );
};

export default Header;
