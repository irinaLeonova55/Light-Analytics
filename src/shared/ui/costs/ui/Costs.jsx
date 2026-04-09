import styles from './Costs.module.scss';

import costsImg from '@/shared/assets/images/costs-img.svg';

const Costs = () => {
  return (
    <div className={styles.costsBg}>
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
          <div className={styles.costsContent}>
            <img src={costsImg} className={styles.costsCharts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Costs;
