import { motion } from 'framer-motion';

import styles from './Marketplaces.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

import marketplacesImg from '@/shared/assets/images/marketplaces-image.png';

const Marketplaces = () => {
  const steps = [
    {
      id: 1,
      text: 'Зарабатывайте 15% чистой прибыли и больше',
    },
    {
      id: 2,
      text: 'Удваивайте Ваш собственный капитал год к году',
    },
    {
      id: 3,
      text: '80% Вашей товарной матрицы должна генерировать целевую чистую прибыль',
    },
    {
      id: 4,
      text: 'Получайте ROI от 100% годовых и больше',
    },
    {
      id: 5,
      text: 'Ускоряйте оборачиваемость Вашего капитала от 3-5 раз в год и больше',
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="marketplaces">
      <div className={styles.marketplacesWrapper}>
        <Container size="cards">
          <div>
            <Headline
              align="left"
              supertitle="Прибыль"
              title="На маркетплейсах можно и нужно зарабатывать"
              light
            />
            <motion.ol
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className={styles.marketplacesSteps}
            >
              {steps.map((step) => (
                <motion.li
                  key={step.id}
                  variants={item}
                  className={styles.marketplacesStep}
                >
                  <span className={styles.stepNumber}>{step.id}</span>
                  <p className={styles.stepText}>{step.text}</p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </Container>
        <img
          src={marketplacesImg}
          alt="LightAnalitics"
          loading="lazy"
          className={styles.marketplacesImg}
        />
      </div>
    </section>
  );
};

export default Marketplaces;
