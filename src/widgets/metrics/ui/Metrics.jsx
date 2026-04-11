import styles from './Metrics.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

const Metrics = () => {
  const cards = [
    { id: 1, counter: '70+', text: 'Селлеров' },
    { id: 2, counter: '290 млн', text: 'Совокупный оборот рублей в месяц' },
    { id: 3, counter: '10-15%', text: 'Средняя чистая прибыль' },
    { id: 4, counter: '100%', text: 'Средний годовой ROI' },
  ];

  return (
    <section id="metrics" className={styles.metrics}>
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
            <div
              key={card.id}
              className={`${styles.metricCard} ${index === 1 ? styles.cardBlue : styles.cardWhite}`}
            >
              <span className={styles.metricCounter}>{card.counter}</span>
              <span className={styles.metricText}>{card.text}</span>
            </div>
          ))}
        </div>
      </Container>
      <div className={styles.metricsBlur} />
    </section>
  );
};

export default Metrics;
