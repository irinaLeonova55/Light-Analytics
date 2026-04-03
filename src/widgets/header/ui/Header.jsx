import styles from './Header.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';

import logoWhite from '@/shared/assets/icons/logo-white.svg';

const Header = () => {
  const links = [
    { id: 1, href: '#', name: 'Функции' },
    { id: 2, href: '#', name: 'Преимущества' },
    { id: 3, href: '#', name: 'План' },
    { id: 4, href: '#', name: 'Тарифы' },
    { id: 5, href: '#', name: 'FAQ' },
  ];

  return (
    <header className={styles.header}>
      <Container size="default">
        <div className={styles.headerContainer}>
          <nav>
            <ul className={styles.menu}>
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
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
