import styles from './Header.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';
import Menu from '@/shared/ui/Menu/Menu';

import logoWhite from '@/shared/assets/icons/logo-white.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="default">
        <div className={styles.headerContainer}>
          <Menu section="menuHeader" />
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
            <Button variant="littleGrey" text="Вход" />
            <Button variant="littleWhite" text="Регистрация" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
