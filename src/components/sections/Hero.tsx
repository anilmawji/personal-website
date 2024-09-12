import styles from './Hero.module.css';
import { Icon, IconType } from '../icons/Icon';
import GlitchedText from '../text/GlitchedText';
import ScrollToButton from '../../components/buttons/ScrollToButton';
import { joinClassNames } from '../../utils';

interface Props {
  className?: string;
}

const HeroSection = ({ className }: Props) => {
  return (
    <section className={joinClassNames(styles.header, className)}>
      <GlitchedText>
        <Icon
          className={`${styles.bracket} ${styles.bracketLeft}`}
          type={IconType.BRACKET_LEFT}
        />
        <h4 className={styles.name}>Anil Mawji</h4>
        <Icon
          className={`${styles.bracket} ${styles.bracketRight}`}
          type={IconType.BRACKET_RIGHT}
        />
      </GlitchedText>
      <div className={styles.body}>
        <h2 className={styles.title}>
          Cyber Security Analyst
        </h2>
        <div className={styles.bio}>
          Fifth year Computer Science student at the University of Calgary.
          <br />
          Cyber security professional with a passion for all things technology.
        </div>
        <div className={styles.icons}>
          <Icon
            className={`${styles.icon} ${styles.linkedinIcon}`}
            type={IconType.LINKEDIN}
            href="https://ca.linkedin.com/in/anil-mawji"
          />
          <Icon
            className={`${styles.icon} ${styles.thmIcon}`}
            type={IconType.TRYHACKME}
            href="https://tryhackme.com/p/Cyb3rHusky"
          />
          <Icon
            className={`${styles.icon} ${styles.htbIcon}`}
            type={IconType.HACK_THE_BOX}
            href="https://www.hackthebox.com/"
          />
          <Icon
            className={`${styles.icon} ${styles.githubIcon}`}
            type={IconType.GITHUB}
            href="https://github.com/anilmawji"
          />
          <Icon
            className={`${styles.icon} ${styles.soIcon}`}
            type={IconType.STACK_OVERFLOW}
            href="https://stackoverflow.com/users/8902167/anil-m"
          />
        </div>
        <ScrollToButton
          className={styles.scrollButton}
          scrollPosition={650}
          size={45}
          rotation={180}
        />
      </div>
    </section>
  );
}

export default HeroSection;