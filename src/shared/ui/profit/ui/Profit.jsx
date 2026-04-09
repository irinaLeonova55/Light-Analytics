import styles from './Profit.module.scss';

import profitImg from '@/shared/assets/images/profit.svg';

const Profit = () => {
  return (
    <div className={styles.profitBg}>
      <img src={profitImg} className={styles.profitTable} />
    </div>
  );
};

export default Profit;
