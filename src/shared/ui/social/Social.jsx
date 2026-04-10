import styles from './Social.module.scss';

import telegramIcon from '@/shared/assets/icons/telegram.svg';
import mailIcon from '@/shared/assets/icons/mail.svg';
import whatappIcon from '@/shared/assets/icons/whatapp.svg';

const Social = () => {
  const socialLinks = [
    { id: 1, img: telegramIcon, href: '#', name: 'Телеграм' },
    { id: 2, img: mailIcon, href: '#', name: 'Почта' },
    { id: 3, img: whatappIcon, href: '#', name: 'WhatsApp' },
  ];

  return (
    <div className={styles.socialIcons}>
      {socialLinks.map((link) => (
        <a key={link.id} href={link.href}>
          <img src={link.img} alt={link.name} />
        </a>
      ))}
    </div>
  );
};

export default Social;
