import styles from './AllInOne.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

import diagram from '@/shared/assets/images/diagram.svg';
import planningIcon from '@/shared/assets/icons/all-planning.svg';
import financialIcon from '@/shared/assets/icons/all-financial.svg';
import funnelIcon from '@/shared/assets/icons/all-funnel.svg';
import unitIcon from '@/shared/assets/icons/all-unit.svg';
import handIcon from '@/shared/assets/icons/all-hand.svg';
import warehouseIcon from '@/shared/assets/icons/all-warehouse.svg';
import analyticIcon from '@/shared/assets/icons/all-analytic.svg';
import batchCostIcon from '@/shared/assets/icons/all-batch-cost.svg';
import adsAnalyticIcon from '@/shared/assets/icons/all-ads-analytic.svg';
import disctibutionIcon from '@/shared/assets/icons/all-distribution.svg';

const AllInOne = () => {
  const leftList = [
    {
      id: 1,
      text: 'Планирование',
      img: planningIcon,
    },
    { id: 2, text: 'Финансовый учет (P&L, Баланс, ДДС)', img: financialIcon },
    { id: 3, text: 'Воронка', img: funnelIcon },
    { id: 4, text: 'Юнит-экономика', img: unitIcon },
    { id: 5, text: 'Рука на пульсе', img: handIcon },
  ];

  const rightList = [
    {
      id: 1,
      text: 'Складский учет и аналитика остатков',
      img: warehouseIcon,
    },
    {
      id: 2,
      text: 'Аналитика по товарам',
      img: analyticIcon,
    },
    {
      id: 3,
      text: 'Учет себестоимости партиям',
      img: batchCostIcon,
    },
    {
      id: 4,
      text: 'Аналитика рекламных компаний',
      img: adsAnalyticIcon,
    },
    {
      id: 5,
      text: 'Распределение по складам',
      img: disctibutionIcon,
    },
  ];

  return (
    <section className={styles.allInOne}>
      <Container size="cards">
        <Headline
          title="Всё в одном месте"
          desc="Это единая информационная система, позволяющая комплексно управлять Вашим бизнесом. Не нужно покупать множество сервисов, просто используйте LightAnalytics"
        />

        <div className={styles.allDiagram}>
          {/* левый список */}
          <ul className={styles.leftList}>
            {leftList.map((item) => (
              <li key={item.id}>
                <div className={styles.itemContent}>
                  <img src={item.img} alt={item.text} />
                  <span className={styles.itemText}>{item.text}</span>
                </div>
                <span className={styles.itemNumber}>0{item.id}</span>
              </li>
            ))}
          </ul>

          {/* центр */}
          <div className={styles.allCenter}>
            <img src={diagram} alt="Диаграмма" className={styles.diagram} />
            {/*<img src={logoPurple} alt="Логотип" className={styles.allLogo} />
            <img src={allMockup} alt="Мокап" className={styles.allMockup} />*/}
          </div>

          {/* правый список */}
          <ul className={styles.rightList}>
            {rightList.map((item) => (
              <li key={item.id}>
                <div className={styles.itemContent}>
                  <img src={item.img} alt={item.text} />
                  <span className={styles.itemText}>{item.text}</span>
                </div>
                <span className={styles.itemNumber}>
                  {(item.id + leftList.length).toString().padStart(2, '0')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default AllInOne;
