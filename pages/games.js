import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Games.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.buttonContainer}>
          <Link href="/1-5" passHref>
            <button className={styles.selectButton}>
              <span>GRADE</span>
              <span>1-5</span>
            </button>
          </Link>
          <Link href="/6-8" passHref>
            <button className={styles.selectButton}>
              <span>GRADE</span>
              <span>6-8</span>
            </button>
          </Link>
          <Link href="/9-12" passHref>
            <button className={styles.selectButton}>
              <span>GRADE</span>
              <span>9-12</span>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
