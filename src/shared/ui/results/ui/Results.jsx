import styles from './Results.module.scss';

import resultsChart from '@/shared/assets/images/results-chart.svg';
import nextWeek from '@/shared/assets/images/next-week.png';

const Results = () => {
  return (
    <div className={styles.resultsBg}>
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
          <div className={styles.resultsContent}>
            <img src={resultsChart} className={styles.resultsCharts} />
            <img src={nextWeek} className={styles.nextWeek} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
