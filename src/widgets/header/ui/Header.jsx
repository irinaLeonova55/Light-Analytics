import styles from './Header.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';
import Menu from '@/shared/ui/Menu/Menu';

import logoWhite from '@/shared/assets/icons/logo-gradient.svg';
import burger from '@/shared/assets/icons/burger.svg';
import {useState} from "react";
import SupportModal from "@/widgets/support-modal/ui/SupportModal.jsx";

const Header = ({ setIsBurger }) => {
  // Состояние для управления модальным окном поддержки
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
      <header className={styles.header}>
        <Container size="default">
          <div className={styles.headerContainer}>
            {/* 1. Логотип */}
            <div className={styles.logoHeader}>
              <a href="/promo/">
                <img src={logoWhite} alt="Light Analytics" />
              </a>
            </div>

            {/* 2. Меню в центре */}
            <div className={styles.menuWrapper}>
              <Menu
                  section="menuHeader"
                  onSupportClick={() => setIsSupportOpen(true)}
              />
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

        {/* Модальное окно поддержки */}
        <SupportModal
            isOpen={isSupportOpen}
            onClose={() => setIsSupportOpen(false)}
        />
      </header>
  );
};

export default Header;