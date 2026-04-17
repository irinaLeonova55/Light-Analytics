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
      userName: 'Дмитрий К.',
      userWork: 'Селлер электроники, Wildberries',
      userSocial: 'Телеграм',
      userLink: '@dimak_ecom',
      reviewText: 'До этого пользовались другим сервисом, который постоянно вис и запаздывал с данными. Здесь же всё летает! Данные обновляются практически моментально, сразу видно реальную картину по заказам и остаткам. Очень стабильная система, ни одного сбоя или подвисания за всё время работы, теперь это наш основной дашборд.',
    },
    {
      id: 2,
      foto: reviewFoto,
      userName: 'Анна С.',
      userWork: 'Косметика и уход, Wildberries',
      userSocial: 'ВКонтакте',
      userLink: '@anna_cosmetics',
      reviewText: 'Наконец-то мы нашли аналитику, которая не врет в цифрах. Раньше приходилось сводить данные руками в Excel, потому что другие программы часто выдавали ошибки из-за сбоев в расчетах. В Light Analytics всё считается копейка в копейку. Интерфейс понятный, а сам сервис работает как швейцарские часы.',
    },
    {
      id: 3,
      foto: reviewFoto,
      userName: 'Максим Р.',
      userWork: 'Товары для дома, Wildberries',
      userSocial: 'Телеграм',
      userLink: '@max_retail',
      reviewText: 'Крутой инструмент без лишней воды. Мы смогли быстро выявить убыточные товары и перераспределить бюджет на хиты продаж. Очень радует интерфейс и скорость отклика — графики грузятся мгновенно, даже при анализе больших периодов. Видно, что разработчики сделали ставку на надежность платформы.',
    },
    {
      id: 4,
      foto: reviewFoto,
      userName: 'Ольга М.',
      userWork: 'Бренд обуви, Wildberries',
      userSocial: 'Телеграм',
      userLink: '@olga_shoes_wb',
      reviewText: 'У нас огромный ассортимент, и прошлые сервисы просто не справлялись с таким объемом данных, постоянно выдавая ошибки. Эта платформа вытягивает наши 3000+ SKU вообще без проблем. Очень понятные отчеты, четкая юнит-экономика и главное — всё работает стабильно в любой сезон распродаж.',
    }
  ];

  return (
    <section>
      <Container size="cards">
        <Headline
          align="center"
          supertitle="Отзывы"
          title="Отзывы"
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

            <div className={`pagination ${styles.pagination}`}></div>
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
