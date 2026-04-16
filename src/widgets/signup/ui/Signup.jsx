import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import styles from './Signup.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';
import Button from '@/shared/ui/Button/Button';

import signupStep1Bg from '@/shared/assets/images/signup-step-1.png';
import signupStep1Img from '@/shared/assets/images/signup-step-1-img.png';
import signupStep2Bg from '@/shared/assets/images/signup-step-2.png';
import signupStep2Img from '@/shared/assets/images/signup-step-2-img.png';
import signupStep3Bg from '@/shared/assets/images/signup-step-3.png';
import signupStep3Img from '@/shared/assets/images/signup-step-3-img.png';
import signupStep4Bg from '@/shared/assets/images/signup-step-4.png';
import signupStep4Img from '@/shared/assets/images/signup-step-4-img.png';
import signupStep5Bg from '@/shared/assets/images/signup-step-5.png';
import signupStep5Img from '@/shared/assets/images/signup-step-5-img.png';

const Signup = () => {
  const signupRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: signupRef,
    offset: ['start center', 'end center'],
  });

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      id: 1,
      bg: signupStep1Bg,
      img: signupStep1Img,
      title: 'Регистрация',
      desc: 'Создайте аккаунт за минуту и получите доступ к системе аналитики.',
    },
    {
      id: 2,
      bg: signupStep2Bg,
      img: signupStep2Img,
      title: 'Синхронизируем данные',
      desc: 'Загружаем данные из вашего кабинета маркетплейса.',
    },
    {
      id: 3,
      bg: signupStep3Bg,
      img: signupStep3Img,
      title: 'Заводим себестоимость',
      desc: 'Добавляем себестоимость товаров и дополнительные расходы',
    },
    {
      id: 4,
      bg: signupStep4Bg,
      img: signupStep4Img,
      title: 'Проводим сверку',
      desc: 'Проверяем корректность данных и точность расчетов.',
    },
    {
      id: 5,
      bg: signupStep5Bg,
      img: signupStep5Img,
      title: 'Назначаем встречу для демонстрации',
      desc: 'Покажем возможности сервиса и ответим на ваши вопросы.',
    },
  ];

  return (
    <section ref={signupRef} id="signup" className={styles.signup}>
      <Container size="signup">
        <Headline
          supertitle="План подключения"
          title="Создайте аккаунт и получите доступ к сервису в этот же день"
        />
        <div
          className={styles.signupWrapper}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <div className={styles.timelineLine}>
            <motion.div
              className={styles.timelineProgress}
              style={{ height }}
            ></motion.div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true, margin: '-150px' }}
              className={`${styles.signupStep} ${index % 2 !== 0 ? styles.reverse : ''}`}
            >
              <div
                key={step.id}
                className={`${styles.signupImgSide} ${index % 2 !== 0 ? styles.rightImg : ''}`}
              >
                <div className={styles.signupImg}>
                  <div className={styles.imgHeader}>
                    <svg
                      width="24"
                      height="6"
                      viewBox="0 0 24 6"
                      fill="none"
                      xmlns="http://w3.org"
                    >
                      <circle cx="3" cy="3" r="3" fill="white" />
                      <circle cx="12" cy="3" r="3" fill="white" />
                      <circle cx="21" cy="3" r="3" fill="white" />
                    </svg>
                  </div>
                  <img
                    src={step.bg}
                    alt="Фон"
                    className={styles.signupStepBg}
                  />
                  <img
                    src={step.img}
                    alt={step.title}
                    className={styles.signupStepImg}
                  />
                </div>
              </div>
              <div
                className={`${styles.signupTextSide} ${index % 2 !== 0 ? styles.borderRight : styles.borderLeft}`}
              >
                <div className={styles.signupText}>
                  <span className={styles.signupStepNumber}>0{step.id}</span>
                  <h4
                    className={`${index % 2 !== 0 ? styles.after : styles.before}`}
                  >
                    {step.title}
                  </h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className={styles.signupBtnWrapper}>
          <Button
            variant="largePurple"
            text="Бесплатный доступ на 14 дней"
            href="https://lightanalytics.ru/reg"
          />
          <Button
            variant="transparent"
            text="Записаться на демо-встречу"
            href="https://lightanalytics.ru/reg"
          />
        </div>
      </Container>
      <div className={styles.sighupEllipseUp} />
      <div className={styles.sighupEllipseRight} />
      <div className={styles.sighupEllipseDown} />
    </section>
  );
};

export default Signup;
