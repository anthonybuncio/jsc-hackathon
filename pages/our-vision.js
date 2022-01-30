import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.visionContainer}>
          <h1 className={styles.visionTitle}>Our Vision</h1>
          <p className={styles.visionP}>
            Create an easily accessible product that uses "Narratives Instead of
            Numbers" to inspire students to enter and stay in the STEM pipeline,
            ensuring diversity and inclusion for future generations.
          </p>
        </div>
      </main>
    </div>
  );
}
