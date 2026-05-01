import styles from './Social.module.scss';

import telegramIcon from '@/shared/assets/icons/telegram.svg';
import mailIcon from '@/shared/assets/icons/mail.svg';
import maxIcon from '@/shared/assets/icons/max.svg';

const Social = () => {
    const socialLinks = [
        {
            id: 1,
            img: telegramIcon,
            href: 'https://t.me/nikita_mgv',
            name: 'Телеграм',
            target: '_blank'
        },
        {
            id: 2,
            img: mailIcon,
            href: 'mailto:hello@lightanalytics.ru',
            name: 'Почта',
            target: '_self'
        },
        {
            id: 3,
            img: maxIcon,
            href: 'https://max.ru/u/f9LHodD0cOI7P0NBPSp_s0FbGwrawy7EEy_y2b6aApygMMocSmJ7n1GByik',
            name: 'Max',
            target: '_blank'
        },
    ];

    return (
        <div className={styles.socialIcons}>
            {socialLinks.map((link) => (
                <a
                    key={link.id}
                    href={link.href}
                    target={link.target}
                    rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                    aria-label={link.name}
                >
                    <img src={link.img} alt={link.name}/>
                </a>
            ))}
        </div>
    );
};

export default Social;