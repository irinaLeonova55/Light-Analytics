import React, { useEffect, useState } from 'react';
import styles from '@/pages/public-offer/ui/PublicOffer.module.scss';
import Container from '@/shared/ui/Container/Container';
import Header from "@/widgets/header/ui/Header.jsx";
import Footer from "@/widgets/footer/ui/Footer.jsx";
import Burger from "@/shared/ui/burger/ui/Burger.jsx";
import Modal from "@/widgets/modal/ui/Modal.jsx";
import { motion } from 'framer-motion';
import BackToSite from "@/shared/ui/back-to-site/ui/BackToSite.jsx";

const TechSupportPolicy = () => {
    const [isBurger, setIsBurger] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Прокрутка наверх при открытии страницы
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Блокировка скролла при открытом бургер-меню
    useEffect(() => {
        document.body.style.overflow = isBurger ? 'hidden' : 'auto';
    }, [isBurger]);

    return (
        <>
            <Header setIsBurger={setIsBurger} />

            <main>
                <motion.section
                    className={styles.documentSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className={styles.documentWrapper}>
                        <Container>
                            {/* Верхняя кнопка возврата */}
                            <BackToSite className={styles.backTop} />

                            <div className={styles.documentHeader}>
                                <h1 className={styles.documentTitle}>
                                    Правила оказания технической поддержки
                                </h1>
                            </div>

                            <div className={styles.documentContent}>
                                <p>
                                    Текущие правила определяют основные условия оказания технической поддержки пользователям веб-сервиса Light Analytics.
                                </p>

                                <p>
                                    Право на техническую поддержку имеют исключительно зарегистрированные пользователи (Лицензиаты) сервиса.
                                </p>

                                <p>Получить консультацию по техническим вопросам можно:</p>
                                <ul>
                                    <li>
                                        в Telegram (<a href="https://t.me/nikita_mgv" target="_blank" rel="noopener noreferrer">https://t.me/nikita_mgv</a>);
                                    </li>
                                    <li>
                                        по электронной почте <a href="mailto:hello@lightanalytics.ru">hello@lightanalytics.ru</a>.
                                    </li>
                                </ul>

                                <p>Время работы сотрудников отдела технической поддержки:</p>
                                <ul>
                                    <li>в будние дни с 10:00 до 19:00 (московское время);</li>
                                    <li>в выходные дни с 11:00 до 19:00 (московское время).</li>
                                </ul>

                                <p>
                                    Специалисты отдела технической поддержки обрабатывают только те запросы клиентов, которые касаются работы сервиса Light Analytics.
                                </p>

                                <p>
                                    Ответ на письменный запрос клиента предоставляется в течение 24 часов с момента его поступления сотруднику отдела поддержки.
                                </p>

                                <p>
                                    Если клиент имеет право приоритетной поддержки в соответствии с условиями оплаченного тарифа, ответ на его письменный запрос предоставляется в течение 8 часов с момента получения.
                                </p>

                                <p>
                                    Качество и скорость оказанной консультации напрямую зависят от полноты информации о проблеме (наличие скриншотов, логов, детального описания), которую клиент предоставил сотруднику технической поддержки.
                                </p>

                                <p>
                                    Специалисты отдела технической поддержки вправе отказать клиенту в консультации, если он использует нецензурную лексику, не придерживается базовых правил этикета в общении с сотрудником сервиса или использует ПО сервиса не по прямому назначению.
                                </p>
                            </div>
                        </Container>
                    </div>
                </motion.section>
            </main>

            <Footer />

            <Burger setIsBurger={setIsBurger} isBurger={isBurger} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default TechSupportPolicy;