import styles from './MetricsCard.module.scss';

import metricsCardImg from '@/shared/assets/images/metrics-card-table.svg';

const MetricsCard = () => {
  return (
    <div className={styles.metricsCardBg}>
      <img src={metricsCardImg} className={styles.metricsCardTable} />
    </div>
  );
};

export default MetricsCard;
