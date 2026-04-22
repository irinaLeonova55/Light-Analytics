import { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      telegram: formData.get('telegram'),
    };
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>
          ×
        </button>

        <h2 className={styles.modalTitle}>Оставьте заявку</h2>

        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Ваше имя" />
          <input name="phone" type="tel" placeholder="Моб. тел." />
          <input name="email" type="email" placeholder="Почта" />
          <input name="telegram" type="text" placeholder="tg username" />

          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
