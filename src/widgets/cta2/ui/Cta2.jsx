import styles from './Cta2.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';

import laptop from '@/shared/assets/images/laptop.png';

const Cta2 = () => {
  return (
    <section className={styles.ctaTwo}>
      <Container size="cards">
        <div className={styles.ctaTwoWrapper}>
          <div className={styles.ctaTwoContent}>
            <h2 className={styles.ctaTwoHeadline}>
              Сейчас самое лучшее время попробовать бесплатный{' '}
              <span className={styles.headlineColor}>14-ти дневный доступ</span>
            </h2>
            <div className={styles.ctaTwoBtnWrapper}>
              <Button
                variant="largeWhite"
                text="Бесплатный доступ на 14 дней"
                href="https://lightanalytics.ru/reg"
              />
              <Button
                variant="transparent"
                text="Записаться на демо-встречу"
                href="https://lightanalytics.ru/reg"
              />
            </div>
          </div>
          <img
            src={laptop}
            alt="Ноутбук"
            loading="lazy"
            className={styles.cpaTwoImg}
          />
        </div>
      </Container>
      <div className={styles.ctaTwoGradient} />
      <div className={styles.ctaTwoEllipse} />
    </section>
  );
};

export default Cta2;
