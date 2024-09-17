import styles from './Footer.module.css';
import globalStyles from '../../global.module.css';
import ScrollToButton from '../buttons/ScrollToButton';
import CustomNavLink from '../nav/CustomNavLink';
import { Tooltip, TooltipDirection } from '../text/Tooltip';

interface FooterItemListProps {
  title: string;
  links: Record<string, string>;
}

const FooterItemList = ({ title, links }: FooterItemListProps) => {
  return (
    <div className={styles.list}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <ul className={styles.links}>
        {Object.keys(links).map((name, index) => (
          <li key={index}>
            <CustomNavLink
              className={globalStyles.hoverUnderline}
              to={links[name]}
              label={name}
              target={links[name].startsWith('/') ? '_self' : '_blank'}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className={globalStyles.shadowTop}>
      <div className={styles.buttonContainer}>
        <Tooltip text="Back to top" direction={TooltipDirection.TOP} width="90px" distance="22px">
          <ScrollToButton
            className={styles.button}
            size={38}
            scrollLocation={0}
            includeRing
          />
        </Tooltip>
      </div>
      <div className={styles.content}>
        <div className={styles.footerLists}>
          <FooterItemList
            title={"Navigation"}
            links={{
              "Home": "/",
              "Portfolio": "/portfolio",
              "About": "/about",
              "Contact": "/about#contact",
              "Blog": "/blog"
            }}
          />
          <FooterItemList
            title={"Connect With Me"}
            links={{
              "LinkedIn": "https://ca.linkedin.com/in/anil-mawji",
              "Email": "https://stackoverflow.com/users/8902167/anil-m",
              "TryHackMe": "https://tryhackme.com/p/Cyb3rHusky",
              "HackTheBox": "https://www.hackthebox.com/",
              "GitHub": "https://github.com/anilmawji",
              "Stack Overflow": "https://stackoverflow.com/users/8902167/anil-m"
            }}
          />
          <FooterItemList
            title={"External Files"}
            links={{
              "Resume": '',
              "Website License": ''
            }}
          />
        </div>
        <hr className={styles.line}/>
        <p className={styles.copyright}>
          &copy; 2024 site designed & built by Anil Mawji.
          <br/>
          Super Mario&trade; is a trademark of Nintendo Co., Ltd. which does not sponsor, authorize or endorse this site.
          <br/>
          All other trademarks are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
}

export default Footer;