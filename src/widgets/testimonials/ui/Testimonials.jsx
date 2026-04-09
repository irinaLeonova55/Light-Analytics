import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Testimonials.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

import arrowLeft from '@/shared/assets/icons/arrow-left.svg';
import arrowRight from '@/shared/assets/icons/arrow-right.svg';
import reviewFoto from '@/shared/assets/images/review-foto.png';
import stars from '@/shared/assets/icons/stars.svg';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      foto: reviewFoto,
      userName: 'Елена В.',
      userWork: 'Бренд одежды, Wildberries',
      userSocial: 'Телеграм',
      userLink: '@helenviolet',
      reviewText:
        'Очень понравился интерфейс — все выглядит аккуратно и понятно. Даже без долгого обучения можно быстро разобраться, где смотреть ключевые показатели. Теперь регулярно отслеживаю прибыль по товарам и планирую закупки на основе данных, а не интуиции. Теперь используем Light Analytics как основной инструмент для финансового учета и анализа продаж.',
    },
    {
      id: 2,
      foto: reviewFoto,
      userName: 'Елена В.',
      userWork: 'Бренд одежды, Wildberries',
      userSocial: 'Телеграм',
      userLink: '@helenviolet',
      reviewText:
        'Очень понравился интерфейс — все выглядит аккуратно и понятно. Даже без долгого обучения можно быстро разобраться, где смотреть ключевые показатели. Теперь регулярно отслеживаю прибыль по товарам и планирую закупки на основе данных, а не интуиции. Теперь используем Light Analytics как основной инструмент для финансового учета и анализа продаж.',
    },
    {
      id: 3,
      foto: reviewFoto,
      userName: 'Елена В.',
      userWork: 'Бренд одежды, Wildberries',
      userSocial: 'Телеграм',
      userLink: '@helenviolet',
      reviewText:
        'Очень понравился интерфейс — все выглядит аккуратно и понятно. Даже без долгого обучения можно быстро разобраться, где смотреть ключевые показатели. Теперь регулярно отслеживаю прибыль по товарам и планирую закупки на основе данных, а не интуиции. Теперь используем Light Analytics как основной инструмент для финансового учета и анализа продаж.',
    },
    {
      id: 4,
      foto: reviewFoto,
      userName: 'Елена В.',
      userWork: 'Бренд одежды, Wildberries',
      userSocial: 'Телеграм',
      userLink: '@helenviolet',
      reviewText:
        'Очень понравился интерфейс — все выглядит аккуратно и понятно. Даже без долгого обучения можно быстро разобраться, где смотреть ключевые показатели. Теперь регулярно отслеживаю прибыль по товарам и планирую закупки на основе данных, а не интуиции. Теперь используем Light Analytics как основной инструмент для финансового учета и анализа продаж.',
    },
  ];

  return (
    <section>
      <Container size="cards">
        <Headline
          align="left"
          supertitle="Отзывы"
          title="Ваши впечатления о сервисе"
          light
        />
        <div className={styles.reviews}>
          <div className={styles.left}>
            <div className={styles.controls}>
              <button className={`prev ${styles.prev}`}>
                <img src={arrowLeft} alt="Назад" />
              </button>
              <button className={`next ${styles.next}`}>
                <img src={arrowRight} alt="Вперед" />
              </button>
            </div>

            <div className="pagination"></div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={'auto'}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = '.prev';
              swiper.params.navigation.nextEl = '.next';
            }}
            pagination={{
              el: '.pagination',
              type: 'fraction',
            }}
            className={styles.swiper}
          >
            {reviews.map((review, i) => (
              <SwiperSlide
                key={review.id}
                className={`${styles.reviewCard} ${i % 2 !== 0 ? styles.purpleCard : ''}`}
              >
                <div className={styles.userLeft}>
                  <div className={styles.aboutUser}>
                    <img src={review.foto} alt="Пользователь" />
                    <div className={styles.userData}>
                      <span
                        className={`${styles.userName} ${i % 2 !== 0 ? styles.white : ''}`}
                      >
                        {review.userName}
                      </span>
                      <span
                        className={`${styles.userWork} ${i % 2 !== 0 ? styles.white : ''}`}
                      >
                        {review.userWork}
                      </span>
                    </div>
                  </div>
                  <div className={styles.userContact}>
                    <span
                      className={`${styles.userSocial} ${i % 2 !== 0 ? styles.white : ''}`}
                    >
                      {review.userSocial}
                    </span>
                    <span
                      className={`${styles.userLink} ${i % 2 !== 0 ? styles.white : ''}`}
                    >
                      {review.userLink}
                    </span>
                  </div>
                </div>
                <div className={styles.reviewContent}>
                  <div className={styles.reviewText}>{review.reviewText}</div>
                  <div className={styles.reviewRating}>
                    <span className={`${i % 2 !== 0 ? styles.white : ''}`}>
                      Рейтинг
                    </span>
                    <img src={stars} alt="Рейтинг" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
