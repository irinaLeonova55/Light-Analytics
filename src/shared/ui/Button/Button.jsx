import styles from './Button.module.scss';

const Button = ({ text, variant = 'primary', className = '', onClick }) => {
  // Собираем классы: базовый + специфичный для варианта
  const buttonClasses = `${styles.btn} ${styles[variant]} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
