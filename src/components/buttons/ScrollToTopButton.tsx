import styles from './ScrollToTopButton.module.css';
import { joinClassNames } from '../../utils';

interface PropTypes {
  className?: string;
}

const scrollToTopOfPage = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const ScrollToTopButton = ({ className }: PropTypes) => {
  return (
    <div className={joinClassNames(styles.button, className)} onClick={scrollToTopOfPage}>
      <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
    </div>
  );
}

export default ScrollToTopButton;