import styles from './Cta1.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';
import mockup from '@/shared/assets/images/mockup.png';

const Cta1 = () => {
  return (
    <section className={styles.ctaOne}>
      <Container size="mockup">
        <div className={styles.ctaOneContent}>
          <h2 className={styles.ctaOneHeadline}>
            Сейчас самое лучшее время попробовать бесплатный 14-ти дневный
            доступ
          </h2>
          <div className={styles.ctaOneBtnWrapper}>
            <Button variant="largePurple" text="Бесплатный доступ на 14 дней" />
            <Button variant="transparent" text="Записаться на демо-встречу" />
          </div>
        </div>
        <div class={styles.mockupViewport}>
          <img src={mockup} class={styles.mockupImg} alt="Мокап интерфейса" />
        </div>
      </Container>
      <div className={styles.ctaOneEllipse} />
    </section>
  );
};

export default Cta1;
