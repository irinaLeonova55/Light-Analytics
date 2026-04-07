import styles from './Hero.module.scss';
import Container from '@/shared/ui/Container/Container';
import Button from '@/shared/ui/Button/Button';

import heroFoto1 from '@/shared/assets/images/hero-foto-1.png';
import heroFoto2 from '@/shared/assets/images/hero-foto-2.png';
import heroFoto3 from '@/shared/assets/images/hero-foto-3.png';
import heroIcon from '@/shared/assets/icons/hero-icon.svg';
import mockup from '@/shared/assets/images/mockup.png';

const Hero = () => {
  const users = [
    { id: 1, img: heroFoto1 },
    { id: 2, img: heroFoto2 },
    { id: 3, img: heroFoto3 },
  ];

  return (
    <section className={styles.hero}>
      <Container size="hero">
        <div className={styles.heroContainer}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroBanner}>
            <div>
              {users.map((user) => (
                <img
                  key={user.id}
                  src={user.img}
                  alt="Пользователь LightAnalytics"
                  className={styles.heroFoto}
                />
              ))}
            </div>
            <span>Нам доверяют уже 70+ пользователей</span>
          </div>
          <h1>
            Точная, простая и быстрая оцифровка{' '}
            <img src={heroIcon} alt="Иконка график" />
            для селлеров
          </h1>
          <p className={styles.heroDesc}>
            Light Analytics помогает ежедневно отслеживать чистую прибыль по
            каждому товару, планировать финансы и развивать бизнес
          </p>
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.heroBtnWrapper}>
            <Button variant="largePurple" text="Бесплатный доступ на 14 дней" />
            <Button variant="transparent" text="Записаться на демо-встречу" />
          </div>
          <div className={styles.mockupViewport}>
            <img
              src={mockup}
              className={styles.mockupImg}
              alt="Мокап интерфейса"
            />
          </div>
        </div>
      </Container>
      <div className={styles.glass} />
      <div className={styles.heroEllipseUp} />
      <div className={styles.heroEllipseDown} />
    </section>
  );
};

export default Hero;
