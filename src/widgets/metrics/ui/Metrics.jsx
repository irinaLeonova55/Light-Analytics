import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import styles from './Metrics.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

const Metrics = () => {
  const [activeCard, setActiveCard] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cards = [
    { id: 1, value: 70, suffix: '+', text: 'Селлеров' },
    {
      id: 2,
      value: 290,
      suffix: ' млн',
      text: 'Совокупный оборот рублей в месяц',
    },
    { id: 3, value: 15, suffix: '%', text: 'Средняя чистая прибыль' },
    { id: 4, value: 100, suffix: '%', text: 'Средний годовой ROI' },
  ];

  const counts = useRef(cards.map(() => useMotionValue(0))).current;

  const rounded = counts.map((count) =>
    useTransform(count, (latest) => Math.round(latest)),
  );

  useEffect(() => {
    if (!isInView) return;

    const animations = counts.map((count, i) =>
      animate(count, cards[i].value, {
        duration: 3,
        ease: 'easeOut',
      }),
    );

    return () => animations.forEach((a) => a.stop());
  }, [isInView]);

  return (
    <section ref={ref} id="metrics" className={styles.metrics}>
      <Container size="cards">
        <Headline
          supertitle="Преимущества"
          title="Новый сервис, который уже доказал свою эффективность"
          desc="Мы открылись недавно, но уже сейчас более 60 селлеров признали
        эффективность LightAnalytics. Протестируйте наш сервис и скорее всего Вы
        не захотите переходить на что-то другое"
        />
        <div className={styles.metricsWrapper}>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${styles.metricCard} ${index === 1 ? styles.cardBlue : styles.cardWhite} ${activeCard && activeCard !== card.id ? styles.cardDim : ''}`}
            >
              <span className={styles.metricCounter}>
                <motion.span>{rounded[index]}</motion.span>
                <span>{card.suffix}</span>
              </span>
              <span className={styles.metricText}>{card.text}</span>
            </motion.div>
          ))}
        </div>
      </Container>
      <div className={styles.metricsBlur} />
    </section>
  );
};

export default Metrics;
