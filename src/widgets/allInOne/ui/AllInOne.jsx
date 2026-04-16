import styles from './AllInOne.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

import logoPurple from '@/shared/assets/icons/logo-purple.svg';
import allMockup from '@/shared/assets/images/all-mockup.png';

const AllInOne = () => {
  const leftList = [
    'Планирование',
    'Финансовый учет (P&L, Баланс, ДДС)',
    'Воронка',
    'Юнит-экономика',
    'Рука на пульсе',
  ];

  const rightList = [
    'Складский учет и аналитика остатков',
    'Аналитика по товарам',
    ' Учет себестоимости партиям',
    'Аналитика рекламных компаний',
    'Распределение по складам',
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
            {leftList.map((item, i) => (
              <li key={i}>
                <span className={styles.itemText}>{item}</span>
              </li>
            ))}
          </ul>

          {/* центр */}
          <div className={styles.allCenter}>
            <img src={logoPurple} alt="Логотип" className={styles.allLogo} />
            <img src={allMockup} alt="Мокап" className={styles.allMockup} />
          </div>

          {/* правый список */}
          <ul className={styles.rightList}>
            {rightList.map((item, i) => (
              <li key={i}>
                <span className={styles.itemText}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default AllInOne;
