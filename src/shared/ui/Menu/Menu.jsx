import styles from './Menu.module.scss';
import { navLinks } from '@/shared/data/navLinks';

const Menu = ({ section, onClick }) => {
  return (
    <nav>
      <ul className={`${styles[section]}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} onClick={onClick}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
