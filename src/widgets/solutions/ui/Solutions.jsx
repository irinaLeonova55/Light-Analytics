import { useState } from 'react';
import styles from './Solutions.module.scss';
import Container from '@/shared/ui/Container/Container';
import Integrations from '@/shared/ui/integrations/ui/Integrations';
import DataAccuracy from '@/shared/ui/dataAccuracy/ui/DataAccuracy';
import Balance from '@/shared/ui/balance/ui/Balance';
import Results from '@/shared/ui/results/ui/Results';
import Costs from '@/shared/ui/costs/ui/Costs';
import Control from '@/shared/ui/control/ui/Control';
import MetricsCard from '@/shared/ui/metricsCard/ui/MetricsCard';
import Profit from '@/shared/ui/profit/ui/Profit';

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

  const tabs = [
    {
      id: 1,
      text: 'Интеграция с Wildberries и Ozon',
      img: integrationIcon,
      imgActive: integrationIconWhite,
      content: <Integrations />,
    },
    {
      id: 2,
      text: 'Точные данные',
      img: dataIcon,
      imgActive: dataIconWhite,
      content: <DataAccuracy />,
    },
    {
      id: 3,
      text: 'Ежедневная чистая прибыль по каждому товару',
      img: profitIcon,
      imgActive: profitIconWhite,
      content: <Profit />,
    },
    {
      id: 4,
      text: 'P&L, Баланс, ДДС по лучшим мировым стандартам',
      img: balanceIcon,
      imgActive: balanceIconWhite,
      content: <Balance />,
    },
    {
      id: 5,
      text: 'Учет дополнительных расходов',
      img: costsIcon,
      imgActive: costsIconWhite,
      content: <Costs />,
    },
    {
      id: 6,
      text: 'Метрики по артикулам по дням (Рука на пульсе)',
      img: metricsIcon,
      imgActive: metricsIconWhite,
      content: <MetricsCard />,
    },
    {
      id: 7,
      text: 'Прогнозирование результатов',
      img: resultsIcon,
      imgActive: resultsIconWhite,
      content: <Results />,
    },
    {
      id: 8,
      text: 'Более 50+ метрик для полного контроля бизнеса',
      img: chartsIcon,
      imgActive: chartsIconWhite,
      content: <Control />,
    },
  ];

  return (
    <section className={styles.solutions}>
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
            <div>{tabs[tabActive].content}</div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Solutions;
