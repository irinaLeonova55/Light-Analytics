import {useEffect, useState} from 'react';
import styles from './Modal.module.scss';
import {useDemoRequest} from "@/widgets/modal/hook/useDemoRequest.js";

const Modal = ({isOpen, onClose}) => {
    const {sendRequest, isLoading, isSuccess, error, reset} = useDemoRequest();
    const [submittedEmail, setSubmittedEmail] = useState('');
    const [submittedName, setSubmittedName] = useState(''); // Состояние для имени

    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                reset();
                setSubmittedEmail('');
                setSubmittedName(''); // Очищаем имя при закрытии
            }, 300);
            return () => clearTimeout(timer);
        }

        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose, reset]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // Извлекаем имя до первого пробела
        const fullName = formData.get('name') || '';
        const firstName = fullName.trim().split(' ')[0];

        setSubmittedName(firstName);
        setSubmittedEmail(formData.get('email'));

        sendRequest(formData);
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose} aria-label="Закрыть">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                         strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {isSuccess ? (
                    <div className={styles.successState}>
                        <div className={styles.checkmarkWrapper}>
                            <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none"/>
                                <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                        {/* Выводим имя с большой буквы, если оно есть */}
                        <h2 className={styles.modalTitle}>
                            {submittedName ? `${submittedName}, заявка принята!` : 'Заявка принята!'}
                        </h2>
                        <p className={styles.modalSubtitle}>
                            Мы получили Вашу заявку и уже готовимся к встрече.
                            Проверьте почту <strong>{submittedEmail}</strong> — там Вас ждет приветственное письмо.
                        </p>
                        <button className={styles.submitBtn} onClick={onClose}>Закрыть</button>
                    </div>
                ) : (
                    <>
                        <header className={styles.header}>
                            <h2 className={styles.modalTitle}>Запись на демонстрацию</h2>
                            <p className={styles.modalSubtitle}>
                                Демонстрация проходит онлайн в Яндекс Телемосте и занимает около часа.
                                Мы проведем подробный тур по сервису и ответим на Ваши вопросы.
                                Пожалуйста, заполните все поля, чтобы мы могли связаться с Вами.
                            </p>
                        </header>

                        <form className={styles.modalForm} onSubmit={handleSubmit}>
                            <div className={styles.inputField}>
                                <label htmlFor="name">Ваше имя и фамилия *</label>
                                <input id="name" name="name" type="text" placeholder="Иван Иванов" required
                                       disabled={isLoading}/>
                            </div>

                            <div className={styles.inputField}>
                                <label htmlFor="phone">Моб. телефон *</label>
                                <input id="phone" name="phone" type="tel" placeholder="+7 (900) 000-00-00" required
                                       disabled={isLoading}/>
                            </div>

                            <div className={styles.inputField}>
                                <label htmlFor="email">Электронная почта *</label>
                                <input id="email" name="email" type="email" placeholder="mail@example.com" required
                                       disabled={isLoading}/>
                            </div>

                            <div className={styles.inputField}>
                                <label htmlFor="telegram">Telegram *</label>
                                <input id="telegram" name="telegram" type="text" placeholder="@username" required
                                       disabled={isLoading}/>
                            </div>

                            {error && <p className={styles.errorText}>{error}</p>}

                            <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                                {isLoading ? 'Отправка...' : 'Отправить заявку'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;