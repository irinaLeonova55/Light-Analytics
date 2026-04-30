import {Link} from "react-router-dom";
import styles from './BackToSite.module.scss';

const BackToSite = ({ className }) => {
    return (
        <Link to="/" className={`${styles.backButton} ${className}`}>
            <div className={styles.circle}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19 12H5M5 12L12 19M5 12L12 5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <span className={styles.backText}>Вернуться на сайт</span>
        </Link>
    );
};

export default BackToSite;