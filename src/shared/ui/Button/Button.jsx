import styles from './Button.module.scss';

const Button = ({
  text,
  variant = 'primary',
  className = '',
  onClick,
  href,
}) => {
  // Собираем классы: базовый + специфичный для варианта
  const buttonClasses = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a className={buttonClasses} href={href}>
        {text}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
