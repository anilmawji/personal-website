import styles from './Hero.module.css';
import Icon, { IconType } from '../icons/Icon';
import GlitchedText from '../GlitchedText';
import { joinClassNames } from '../../utils';

interface PropTypes {
  className?: string;
}

const HeroSection = ({ className }: PropTypes) => {
  return (
    <section className={joinClassNames(styles.header, className)}>
      <GlitchedText className={styles.name}>
        <Icon
          className={joinClassNames(styles.bracket, styles.bracketLeft)}
          type={IconType.BRACKET_LEFT}
        />
        <h4>Anil Mawji</h4>
        <Icon
          className={joinClassNames(styles.bracket, styles.bracketRight)}
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
            className={joinClassNames(styles.icon, styles.linkedinIcon)}
            type={IconType.LINKEDIN}
            href="https://ca.linkedin.com/in/anil-mawji"
          />
          <Icon
            className={joinClassNames(styles.icon, styles.thmIcon)}
            type={IconType.TRYHACKME}
            href="https://tryhackme.com/p/Cyb3rHusky"
          />
          <Icon
            className={joinClassNames(styles.icon, styles.htbIcon)}
            type={IconType.HACK_THE_BOX}
            href="https://www.hackthebox.com/"
          />
          <Icon
            className={joinClassNames(styles.icon, styles.githubIcon)}
            type={IconType.GITHUB}
            href="https://github.com/anilmawji"
          />
          <Icon
            className={joinClassNames(styles.icon, styles.soIcon)}
            type={IconType.STACK_OVERFLOW}
            href="https://stackoverflow.com/users/8902167/anil-m"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;