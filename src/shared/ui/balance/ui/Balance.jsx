import styles from './Balance.module.scss';

import balanceImg1 from '@/shared/assets/images/balance-img-1.png';
import balanceImg2 from '@/shared/assets/images/balance-img-2.png';
import balanceImg3 from '@/shared/assets/images/balance-img-3.png';

const Balance = () => {
  return (
    <div className={styles.balanceBg}>
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
          <div className={styles.balanceContent}>
            <img src={balanceImg1} className={styles.sideCard} />
            <img src={balanceImg2} className={styles.centerCard} />
            <img src={balanceImg3} className={styles.sideCard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
