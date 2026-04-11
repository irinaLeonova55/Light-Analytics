import styles from './Burger.module.scss';
import closeMenuBtn from '@/shared/assets/icons/close-menu-btn.svg';
import Button from '@/shared/ui/Button/Button';
import Menu from '@/shared/ui/Menu/Menu';

const Burger = ({ setIsBurger, isBurger }) => {
  return (
    <div
      className={`${styles.burgerBg} ${isBurger ? styles.burgerBgOpen : styles.burgerBgClose}`}
      onClick={() => setIsBurger(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.burger} ${isBurger ? styles.burgerOpen : styles.burgerClose}`}
      >
        <div className={styles.menuContent}>
          <div className={styles.closeMenuWrapper}>
            <button
              onClick={() => setIsBurger(false)}
              className={styles.closeMenuBtn}
            >
              <img src={closeMenuBtn} alt="Закрыть" />
            </button>
          </div>

          <Menu section="menuBurger" onClick={() => setIsBurger(false)} />

          <div
            className={styles.burgerBtnWrapper}
            onClick={() => setIsBurger(false)}
          >
            <Button
              variant="largePurple"
              text="Создать учетную запись"
              href="https://lightanalytics.ru/reg"
            />
            <Button
              variant="largeWhite"
              text="Войти"
              href="https://lightanalytics.ru/login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
