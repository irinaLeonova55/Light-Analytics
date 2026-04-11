import { useState } from 'react';

import styles from './Faq.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

const Faq = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Подходит ли Light Analytics начинающим селлерам?',
      answer:
        'Подключение занимает от 1 до 3 дней. Мы создаём учетную запись, синхронизируем данные с маркетплейсами, настраиваем себестоимость и проводим сверку.',
    },
    {
      id: 2,
      question: 'Подходит ли Light Analytics начинающим селлерам?',
      answer:
        'Подключение занимает от 1 до 3 дней. Мы создаём учетную запись, синхронизируем данные с маркетплейсами, настраиваем себестоимость и проводим сверку.',
    },
    {
      id: 3,
      question: 'Подходит ли Light Analytics начинающим селлерам?',
      answer:
        'Подключение занимает от 1 до 3 дней. Мы создаём учетную запись, синхронизируем данные с маркетплейсами, настраиваем себестоимость и проводим сверку.',
    },
    {
      id: 4,
      question: 'Подходит ли Light Analytics начинающим селлерам?',
      answer:
        'Подключение занимает от 1 до 3 дней. Мы создаём учетную запись, синхронизируем данные с маркетплейсами, настраиваем себестоимость и проводим сверку.',
    },
    {
      id: 5,
      question: 'Подходит ли Light Analytics начинающим селлерам?',
      answer:
        'Подключение занимает от 1 до 3 дней. Мы создаём учетную запись, синхронизируем данные с маркетплейсами, настраиваем себестоимость и проводим сверку.',
    },
    {
      id: 6,
      question: 'Подходит ли Light Analytics начинающим селлерам?',
      answer:
        'Подключение занимает от 1 до 3 дней. Мы создаём учетную запись, синхронизируем данные с маркетплейсами, настраиваем себестоимость и проводим сверку.',
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
