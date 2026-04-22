import { motion } from 'framer-motion';

import styles from './Features.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

import featuresTable from '@/shared/assets/images/features-table.svg';
import featuresChart from '@/shared/assets/images/features-chart.svg';
import featuresSpeed from '@/shared/assets/images/features-speed.webp';

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

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className={styles.features}>
      <Container size="cards">
        <Headline
          supertitle="Функции"
          title="Мы точные и быстрые"
          align="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.featuresWrapper}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={item}
              className={styles.featuresCard}
            >
              <div className={styles.cardWindow}>
                <img
                  src={feature.img}
                  alt={feature.title}
                  className={styles.featuresImage}
                />
              </div>
              <div className={styles.textWrapper}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
      <div className={styles.featuresBlur} />
    </section>
  );
};

export default Features;
