import styles from './Headline.module.scss';

const Headline = ({ supertitle, title, desc, light }) => {
  return (
    <>
      {light ? (
        <div className={styles.headline}>
          <div className={styles.supertitleLight}>{supertitle}</div>
          <h2 className={styles.titleLight}>{title}</h2>
          <p className={styles.descLight}>{desc}</p>
        </div>
      ) : (
        <div className={styles.headline}>
          <div className={styles.supertitle}>{supertitle}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>
      )}
    </>
  );
};

export default Headline;
