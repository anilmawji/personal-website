import useBoolean from '../../hooks/useBoolean';
import CustomNavLink from './CustomNavLink'
import styles from './Navbar.module.css'
import HamburgerButton from './HamburgerButton';
import SearchBar from '../SearchBar';

const Navbar = () => {
  const { value: isHamburgerOpen, toggle, setFalse } = useBoolean(false);

  // Adds a short delay before closing the navbar
  async function closeHamburgerDrawer() {
    if (isHamburgerOpen) {
      setTimeout(() => {
        setFalse();
      }, 250);
    }
  }

  return (
    <nav className={styles.nav}>
      <HamburgerButton className={styles.hamburger} isOpen={isHamburgerOpen} onToggle={toggle} />
      <ul>
        <CustomNavLink to="/" label="Home" onClick={closeHamburgerDrawer} />
        <CustomNavLink to="/about#bio" label="About" onClick={closeHamburgerDrawer} />
        <CustomNavLink to="/portfolio" label="Portfolio" onClick={closeHamburgerDrawer} />
        <CustomNavLink to="/experience" label="Experience" onClick={closeHamburgerDrawer} />
        <CustomNavLink to="/about#contact" label="Contact" onClick={closeHamburgerDrawer} />
        <CustomNavLink to="/blog" label="Blog" onClick={closeHamburgerDrawer} />
        <SearchBar />
      </ul>
    </nav>
  );
};

export default Navbar