import styles from '@/pages/public-offer/ui/PublicOffer.module.scss';
import Container from '@/shared/ui/Container/Container';
import Header from "@/widgets/header/ui/Header.jsx";
import Footer from "@/widgets/footer/ui/Footer.jsx";
import Burger from "@/shared/ui/burger/ui/Burger.jsx";
import Modal from "@/widgets/modal/ui/Modal.jsx";
import { motion } from 'framer-motion';
import BackToSite from "@/shared/ui/back-to-site/ui/BackToSite.jsx";
import {useEffect, useState} from "react";

const CookiePolicy = () => {
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
                                    Использование cookie
                                </h1>
                            </div>

                            <div className={styles.documentContent}>
                                <p>
                                    Продолжая использовать наш сайт lightanalytics.ru, вы даете согласие на обработку файлов cookie и пользовательских данных (IP-адрес, сведения о местоположении, тип и версия ОС, тип и версия браузера, разрешение экрана, источник перехода на сайт, язык ОС и браузера, поведение на сайте) в целях обеспечения функционирования сайта, проведения ретаргетинга и статистических исследований. В том числе с использованием сервисов аналитики (например, Яндекс.Метрика). Если вы не хотите, чтобы ваши данные обрабатывались, пожалуйста, измените настройки браузера или покиньте сайт.
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

export default CookiePolicy;