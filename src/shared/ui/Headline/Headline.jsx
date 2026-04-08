import styles from './Headline.module.scss';

/*const Headline = ({ supertitle, title, desc, light, align = 'center' }) => {
  return (
    <div
      className={`${styles.headlineWrapper} ${
        align === 'left' ? styles.headlineLeft : styles.headlineCenter
      }}`}
    >
      <div className={styles.headline}>
        <div className={light ? styles.supertitleLight : styles.supertitle}>
          {supertitle}
        </div>
        <h2 className={light ? styles.titleLight : styles.title}>{title}</h2>
        <p className={light ? styles.descLight : styles.desc}>{desc}</p>
      </div>
    </div>
  );
};*/

const Headline = ({ supertitle, title, desc, light, align = 'center' }) => {
  return (
    <div
      className={`${styles.headline} ${
        align === 'center' ? styles.center : styles.left
      }`}
    >
      {supertitle && (
        <div className={light ? styles.supertitleLight : styles.supertitle}>
          {supertitle}
        </div>
      )}

      <h2
        className={`${light ? styles.titleLight : styles.title} ${align === 'left' ? styles.textLeft : ''}`}
      >
        {title}
      </h2>

      <p className={light ? styles.descLight : styles.desc}>{desc}</p>
    </div>
  );
};

export default Headline;
