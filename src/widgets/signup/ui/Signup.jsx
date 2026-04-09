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
    <section className={styles.signup}>
      <Container size="signup">
        <Headline
          supertitle="План подключения"
          title="Создайте аккаунт и получите доступ к сервису в этот же день"
        />
        <div className={styles.signupWrapper}>
          {steps.map((step, index) => (
            <div
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
            </div>
          ))}
        </div>
        <div className={styles.signupBtnWrapper}>
          <Button variant="largePurple" text="Бесплатный доступ на 14 дней" />
          <Button variant="transparent" text="Записаться на демо-встречу" />
        </div>
      </Container>
    </section>
  );
};

export default Signup;
