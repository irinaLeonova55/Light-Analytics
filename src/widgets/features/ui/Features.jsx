import styles from './Features.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

import featuresTable from '@/shared/assets/images/features-table.png';
import featuresChart from '@/shared/assets/images/features-chart.png';
import featuresSpeed from '@/shared/assets/images/features-speed.png';

const Features = () => {
  const features = [
    {
      id: 1,
      img: featuresTable,
      title: 'Точность данных',
      desc: 'Данные соответствуют фин отчетам ВБ на 100%',
    },
    {
      id: 2,
      img: featuresChart,
      title: 'Легкий и приятный интерфейс',
      desc: 'Понятный интерфейс, в котором вы быстро находите нужные показатели и принимаете решения',
    },
    {
      id: 3,
      img: featuresSpeed,
      title: 'Скорость работы',
      desc: 'Мгновенная загрузка аналитики даже при больших объемах данных',
    },
  ];

  return (
    <section className={styles.features}>
      <Container size="cards">
        <Headline supertitle="Функции" title="Мы точные и быстрые" />

        <div className={styles.featuresWrapper}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featuresCard}>
              <div className={styles.cardWindow}>
                <img
                  src={feature.img}
                  alt={feature.title}
                  className={styles.featuresImage}
                />
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.cardTitle}>{feature.title}</span>
                <span className={styles.cardDesc}>{feature.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className={styles.featuresBlur} />
    </section>
  );
};

export default Features;
