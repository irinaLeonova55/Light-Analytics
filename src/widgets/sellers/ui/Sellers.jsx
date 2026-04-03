import styles from './Sellers.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

import sellersArrow from '@/shared/assets/icons/sellers-arrow.svg';
import sellersBgUp from '@/shared/assets/images/sellers-bg-up.png';

const Sellers = () => {
  const advantages = [
    ['Точная аналитика', 'Финансовый контроль'],
    ['Чистая прибыль', 'Управление прибылью'],
    ['Оцифрованный бизнес', 'Контроль'],
    ['Системный масштаб'],
    ['Стратегия роста'],
  ];

  return (
    <section className={styles.sellers}>
      <Container size="cards">
        <Headline
          light
          supertitle="Функции"
          title="Разработано селлерами для селлеров"
          desc="Мы проводим десятки встреч с селлерами, чтобы выработать максимально эффективную систему управления бизнесом в нашем сервисе"
        />
        <div className={styles.sellersCards}>
          <div className={styles.sellersItemText}>
            <img
              src={sellersArrow}
              alt="Стрелка"
              className={styles.sellersImg}
            />
            <div className={styles.sellersTitle}>
              Управляете бизнесом, а не просто смотрите отчёты
            </div>
            <p className={styles.sellersDesc}>
              Планируйте продажи, моделируйте сценарии «что если», контролируйте
              финансы и масштабируйте прибыль — всё в одной системе без Excel и
              ручных таблиц.
            </p>
          </div>

          <div
            style={{
              backgroundImage: `url(${sellersBgUp})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className={styles.sellerImgUp}
          >
            <div className={styles.block}>
              {advantages.map((row, index) => (
                <div key={index} className={styles.row}>
                  {row.map((item, index) => (
                    <div key={index} className={styles.advantageItem}>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sellers;
