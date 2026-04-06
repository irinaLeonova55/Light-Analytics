import { useState } from 'react';

import styles from './Pricing.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

const Pricing = () => {
  const [periodActive, setPeriodActive] = useState(1);

  const tabs = [
    { id: 1, period: 'Месяц', discount: '' },
    { id: 2, period: 'Квартал', discount: '10' },
    { id: 3, period: 'Полгода', discount: '15' },
    { id: 4, period: 'Год', discount: '20' },
  ];

  const tariffs = {
    1: {
      label: 'Месячная подписка',
      period: 'Месяц',
      price: 3500,
      slash: 'мес',
      forTen: 5500,
      forThirty: 9500,
    },
    2: {
      label: 'Подписка на квартал',
      period: 'Квартал',
      price: 9450,
      slash: 'кв',
      forTen: 5000,
      forThirty: 8500,
    },
    3: {
      label: 'Подписка на полгода',
      period: 'Полгода',
      price: 17850,
      slash: 'полгода',
      forTen: 4700,
      forThirty: 8000,
    },
    4: {
      label: 'Годовая подписка',
      period: 'Год',
      price: 33600,
      slash: 'год',
      forTen: 4500,
      forThirty: 7600,
    },
  };

  const activeTariff = tariffs[periodActive];

  const priceIncludes = [
    { id: 1, text: 'Wildberries + Ozon' },
    { id: 2, text: 'Весь функционал без ограничений' },
    { id: 3, text: 'Без ограничений кол-во юр. лиц' },
    { id: 4, text: 'Без ограничений кол-во пользователей' },
  ];

  return (
    <section className={styles.pricing}>
      <div className={styles.pricingBg}>
        <Container size="pricing">
          <Headline
            supertitle="Тарифы"
            title="Комфортный и лояльный тариф"
            light
          />
          <div className={styles.pricingContent}>
            <div className={styles.pricingToggle}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.period} ${periodActive === tab.id ? styles.periodActive : ''}`}
                  onClick={() => setPeriodActive(tab.id)}
                >
                  {tab.period}
                  <span className={styles.discount}>
                    {tab.id !== 1 ? ` (-${tab.discount}%)` : ''}
                  </span>
                </button>
              ))}
            </div>
            <div className={styles.pricingCardBg}>
              <div className={styles.priceArea}>
                <span>{activeTariff.label}</span>
                <div className={styles.price}>
                  {activeTariff.price} ₽ <span>/{activeTariff.slash}</span>
                </div>
                <p className={styles.underPrice}>
                  При выручке до 10 млн. руб. в месяц
                </p>
                <div className={styles.priceDesc}>
                  {activeTariff.forTen}₽/в месяц при выручке {'>'} 10 млн. руб.
                  в месяц
                </div>
                <div className={styles.priceDesc}>
                  {activeTariff.forThirty}₽/в месяц при выручке {'>'} 30 млн.
                  руб. в месяц
                </div>
              </div>
              <div className={styles.priceIncludes}>
                <span className={styles.allInclusive}>Все включено:</span>
                <ul>
                  {priceIncludes.map((include) => (
                    <li key={include.id} className={styles.pricingText}>
                      {include.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Pricing;
