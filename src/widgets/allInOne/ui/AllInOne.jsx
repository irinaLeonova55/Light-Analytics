import styles from './AllInOne.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

import logoPurple from '@/shared/assets/icons/logo-purple.svg';
import allMockup from '@/shared/assets/images/all-mockup.png';

const AllInOne = () => {
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
            <li>Планирование</li>
            <li>Финансовый учет (P&L, Баланс, ДДС)</li>
            <li>Воронка</li>
            <li>Юнит-экономика</li>
            <li>Рука на пульсе</li>
          </ul>

          {/* центр */}
          <div className={styles.allCenter}>
            <img src={logoPurple} alt="Логотип" className={styles.allLogo} />
            <img src={allMockup} alt="Мокап" className={styles.allMockup} />
            
          </div>

          {/* правый список */}
          <ul className={styles.rightList}>
            <li>Складский учет и аналитика остатков</li>
            <li>Аналитика по товарам</li>
            <li>Учет себестоимости партиям</li>
            <li>Аналитика рекламных компаний</li>
            <li>Распределение по складам</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default AllInOne;
