import styles from '../styles/Home.module.css';
import Header from '../components/Header.js';
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
} from 'react-icons/io5';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}></main>
      <footer className={styles.footerContainer}>
        <div className={styles.homeFooter}>
          <IoLogoTwitter className={styles.homeSocial} />
          <IoLogoFacebook className={styles.homeSocial} />
          <IoLogoInstagram className={styles.homeSocial} />
          <IoLogoTiktok className={styles.homeSocial} />
        </div>
      </footer>
    </div>
  );
}
