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

  return (
    <a className={buttonClasses} onClick={onClick} href={href}>
      {text}
    </a>
  );
};

export default Button;
