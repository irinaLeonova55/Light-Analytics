import { useState } from 'react';

import styles from './Faq.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

const Faq = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Сколько времени занимает подключение и настройка сервиса?',
      answer:
          'Подключение занимает 1 час. Мы создаём учетную запись, безопасно синхронизируем данные по API маркетплейсов, загружаем информацию по себестоимости, Вы можете видеть Вашу прибыль и другие показатели.',
    },
    {
      id: 2,
      question: 'Подходит ли Light Analytics начинающим селлерам?',
      answer:
          'Да, интерфейс интуитивно понятен и не требует долгого обучения. Но максимальную пользу сервис приносит действующим селлерам, у которых уже есть оборот, и которым необходимо навести порядок в финансах, оцифровать склад и избежать кассовых разрывов.',
    },
    {
      id: 3,
      question: 'Есть ли у вас инструменты для SEO-оптимизации или автоответов на отзывы?',
      answer:
          'Нет. Мы принципиально сфокусированы только на внутренней аналитике: финансовых показателях, юнит-экономике и складских метриках. Мы не распыляемся на внешнюю аналитику или управление контентом, чтобы гарантировать безупречную точность ваших финансовых отчетов.',
    },
    {
      id: 4,
      question: 'Насколько быстро обновляются данные по продажам и заказам?',
      answer:
          'Благодаря стабильной серверной архитектуре и независимым API-опросам для каждого кабинета, данные загружаются быстро и без "подвисаний". Вы видите актуальную картину в реальном времени, даже если у вас тысячи артикулов.',
    },
    {
      id: 5,
      question: 'Учитывает ли сервис скрытые удержания, возвраты и штрафы?',
      answer:
          'Да, система забирает из отчетов маркетплейса всю детализацию. Алгоритмы автоматически учитывают логистику, комиссии, возвраты, хранение и штрафы, чтобы вы видели реальную чистую прибыль до копейки.',
    },
    {
      id: 6,
      question: 'Можно ли объединить аналитику по нескольким ИП и магазинам?',
      answer:
          'Конечно. Наша платформа отлично подходит для консолидации. Вы можете подключить несколько кабинетов и смотреть аналитику по каждому отдельному магазину.',
    },
  ];
  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.faqWrapper}>
        <Container size="narrow">
          <Headline supertitle="FAQ" title="Часто задаваемые вопросы" />
          <div className={styles.faqContent}>
            {questions.map((question) => {
              const active = faqOpen === question.id;
              return (
                <div
                  key={question.id}
                  className={`${styles.faqItem} ${active ? styles.activItem : ''}`}
                >
                  <button
                    onClick={() => setFaqOpen(active ? null : question.id)}
                    className={`${styles.question} ${active ? styles.activItem : ''}`}
                  >
                    {question.question}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`${styles.faqSvg} ${active ? styles.rotate : ''}`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`${styles.answer} ${active ? styles.answerOpen : ''}`}
                  >
                    <div className={styles.answerInner}>{question.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Faq;
