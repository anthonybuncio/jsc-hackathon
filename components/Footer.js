import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
} from 'react-icons/io5';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <Footer className={styles.footerContainer}>
      <div className={styles.homeFooter}>
        <IoLogoTwitter />
        <IoLogoFacebook />
        <IoLogoInstagram />
        <IoLogoTiktok />
      </div>
    </Footer>
  );
}
