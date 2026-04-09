import styles from './Control.module.scss';

import controlImg from '@/shared/assets/images/control-img.svg';

const Control = () => {
  const tabs = [
    { id: 1, text: 'Заказы' },
    { id: 2, text: 'Выкупы' },
    { id: 3, text: 'Процент выкупа' },
    { id: 4, text: 'Возвраты' },
    { id: 5, text: 'Цена' },
    { id: 6, text: 'Ср.выкупы в день' },
    { id: 7, text: '+50 метрик' },
  ];

  return (
    <div className={styles.controlBg}>
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
          <div className={styles.controlContent}>
            <img src={controlImg} className={styles.controlCharts} />
            <div className={styles.controlTabs}>
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`${styles.controlTab} ${index === tabs.length - 1 ? styles.activeTab : ''}`}
                >
                  {tab.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
