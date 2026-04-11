import { useState } from 'react';
import styles from './Solutions.module.scss';
import Container from '@/shared/ui/Container/Container';

import integrationImg from '@/shared/assets/images/integration.png';
import accuracyImg from '@/shared/assets/images/accuracy.png';
import profitImg from '@/shared/assets/images/profit.png';
import balanceImg from '@/shared/assets/images/balance.png';
import costsImg from '@/shared/assets/images/costs.png';
import metricsImg from '@/shared/assets/images/metric-card.png';
import resultsImg from '@/shared/assets/images/results.png';
import controlImg from '@/shared/assets/images/control.png';

import integrationIcon from '@/shared/assets/icons/solution-integration.svg';
import dataIcon from '@/shared/assets/icons/solutions-data.svg';
import profitIcon from '@/shared/assets/icons/solutions-profit.svg';
import balanceIcon from '@/shared/assets/icons/solutions-balance.svg';
import costsIcon from '@/shared/assets/icons/solutions-costs.svg';
import metricsIcon from '@/shared/assets/icons/solutions-metrics.svg';
import resultsIcon from '@/shared/assets/icons/solutions-results.svg';
import chartsIcon from '@/shared/assets/icons/solutions-charts.svg';

import integrationIconWhite from '@/shared/assets/icons/solution-integration-white.svg';
import dataIconWhite from '@/shared/assets/icons/solutions-data-white.svg';
import profitIconWhite from '@/shared/assets/icons/solutions-profit-white.svg';
import balanceIconWhite from '@/shared/assets/icons/solutions-balance-white.svg';
import costsIconWhite from '@/shared/assets/icons/solutions-costs-white.svg';
import metricsIconWhite from '@/shared/assets/icons/solutions-metrics-white.svg';
import resultsIconWhite from '@/shared/assets/icons/solutions-results-white.svg';
import chartsIconWhite from '@/shared/assets/icons/solutions-charts-white.svg';

const Solutions = () => {
  const [tabActive, setTabActive] = useState(0);
  const [tabOpen, setTabOpen] = useState(null);

  const tabs = [
    {
      id: 1,
      text: 'Интеграция с Wildberries и Ozon',
      img: integrationIcon,
      imgActive: integrationIconWhite,
      content: integrationImg,
    },
    {
      id: 2,
      text: 'Точные данные',
      img: dataIcon,
      imgActive: dataIconWhite,
      content: accuracyImg,
    },
    {
      id: 3,
      text: 'Ежедневная чистая прибыль по каждому товару',
      img: profitIcon,
      imgActive: profitIconWhite,
      content: profitImg,
    },
    {
      id: 4,
      text: 'P&L, Баланс, ДДС по лучшим мировым стандартам',
      img: balanceIcon,
      imgActive: balanceIconWhite,
      content: balanceImg,
    },
    {
      id: 5,
      text: 'Учет дополнительных расходов',
      img: costsIcon,
      imgActive: costsIconWhite,
      content: costsImg,
    },
    {
      id: 6,
      text: 'Метрики по артикулам по дням (Рука на пульсе)',
      img: metricsIcon,
      imgActive: metricsIconWhite,
      content: metricsImg,
    },
    {
      id: 7,
      text: 'Прогнозирование результатов',
      img: resultsIcon,
      imgActive: resultsIconWhite,
      content: resultsImg,
    },
    {
      id: 8,
      text: 'Более 50+ метрик для полного контроля бизнеса',
      img: chartsIcon,
      imgActive: chartsIconWhite,
      content: controlImg,
    },
  ];

  return (
    <section id="solutions" className={styles.solutions}>
      <div className={styles.solutionsBg}>
        <Container size="default">
          <div className={styles.solutionsWrapper}>
            <div className={styles.leftSolutions}>
              <h2 className={styles.solutionsHeadline}>Функции сервиса</h2>
              <ul className={styles.tabsList}>
                {tabs.map((tab, index) => (
                  <li
                    key={tab.id}
                    className={tabActive === index ? styles.tabActive : ''}
                  >
                    <button
                      onClick={() => setTabActive(index)}
                      className={tabActive === index ? styles.tabActive : ''}
                    >
                      <img
                        src={tabActive === index ? tab.imgActive : tab.img}
                      />
                      {tab.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <img className={styles.tabContent} src={tabs[tabActive].content} />
          </div>

          <div className={styles.solutionContentMobile}>
            <h2 className={styles.solutionsHeadline}>Функции сервиса</h2>
            {tabs.map((tab) => {
              const active = tabOpen === tab.id;
              return (
                <div
                  key={tab.id}
                  className={`${styles.tabItem} ${active ? styles.activItem : ''}`}
                >
                  <button
                    onClick={() => setTabOpen(active ? null : tab.id)}
                    className={`${styles.solution} ${active ? styles.activItem : ''}`}
                  >
                    {tab.text}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`${styles.tabSvg} ${active ? styles.rotate : ''}`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`${styles.imageSolutionMobile} ${active ? styles.tabOpen : ''}`}
                  >
                    <img className={styles.imageInner} src={tab.content} />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Solutions;
