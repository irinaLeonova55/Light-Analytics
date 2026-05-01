import { useEffect } from 'react';
import styles from './SupportModal.module.scss';
import Social from '@/shared/ui/social/Social';
import {createPortal} from "react-dom";

const SupportModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Оборачиваем верстку в createPortal
    return createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose} aria-label="Закрыть">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                         strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <header className={styles.header}>
                    <h2 className={styles.modalTitle}>Служба поддержки</h2>
                    <p className={styles.modalSubtitle}>
                        Если у Вас возникли вопросы по подключению или по работе сервиса,
                        пожалуйста, напишите нам. Мы на связи и готовы помочь!
                    </p>
                </header>

                <div className={styles.socialWrapper}>
                    <Social />
                </div>

                <button className={styles.closeBtn} onClick={onClose}>
                    Понятно
                </button>
            </div>
        </div>,
        document.body // Рендерим напрямую в body
    );
};

export default SupportModal;