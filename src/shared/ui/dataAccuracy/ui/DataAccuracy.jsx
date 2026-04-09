import styles from './DataAccuracy.module.scss';

import featuresTable from '@/shared/assets/images/features-table.png';

const DataAccuracy = () => {
  return (
    <div className={styles.dataBg}>
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
          <div className={styles.dataTable}>
            <img src={featuresTable} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAccuracy;
