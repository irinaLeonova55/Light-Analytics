import { motion } from 'framer-motion';

import styles from './Cta1.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';
import mockup from '@/shared/assets/images/mockup.png';

const Cta1 = () => {
  return (
    <section className={styles.ctaOne}>
      <Container size="narrow">
        <div className={styles.ctaOneContent}>
          <h2 className={styles.ctaOneHeadline}>
            Сейчас самое лучшее время попробовать бесплатный 14-ти дневный
            доступ
          </h2>
          <div className={styles.ctaOneBtnWrapper}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: [0.9, 1.02, 1],
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <Button
                variant="largePurple"
                text="Бесплатный доступ на 14 дней"
                href="https://lightanalytics.ru/reg"
              />
            </motion.div>

            <Button
              variant="transparent"
              text="Записаться на демо-встречу"
              href="https://lightanalytics.ru/reg"
            />
          </div>
        </div>
        <div className={styles.mockupViewport}>
          <img
            src={mockup}
            className={styles.mockupImg}
            alt="Мокап интерфейса"
          />
        </div>
      </Container>
      <div className={styles.ctaOneEllipse} />
    </section>
  );
};

export default Cta1;
