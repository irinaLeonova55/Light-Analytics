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
            <ol className={styles.marketplacesSteps}>
              {steps.map((step) => (
                <li key={step.id} className={styles.marketplacesStep}>
                  <span className={styles.stepNumber}>{step.id}</span>
                  <p className={styles.stepText}>{step.text}</p>
                </li>
              ))}
            </ol>
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
