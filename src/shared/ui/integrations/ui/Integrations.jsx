import styles from './Integrations.module.scss';
import logoWhite from '@/shared/assets/icons/logo-white.svg';
import wb from '@/shared/assets/icons/wb.svg';
import ozon from '@/shared/assets/icons/ozon.svg';

const Integrations = () => {
  return (
    <div className={styles.integrationsBg}>
      <div className={styles.cardBorder}>
        <svg
          width="24"
          height="6"
          viewBox="0 0 24 6"
          fill="none"
          xmlns="http://w3.org"
        >
          <circle cx="3" cy="3" r="3" fill="white" />
          <circle cx="12" cy="3" r="3" fill="white" />
          <circle cx="21" cy="3" r="3" fill="white" />
        </svg>
        <div className={styles.insideBorder}>
          <div className={styles.intagrationIcons}>
            <div className={styles.integrationsMarketplaces}>
              <img src={wb} alt="Wildberries" />
              <img src={ozon} alt="Ozon" />
            </div>
            <div className={styles.logoBg}>
              <img src={logoWhite} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
