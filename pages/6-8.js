import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div>
          <Link href="/6-8/rockets" passHref>
            <button className={styles.gameButton}>
              <div className={styles.gameContainer}>
                <h1 className={styles.gameHeader}>Rockets</h1>
                <h2 className={styles.gameSub}>Aerospace Engineering</h2>
              </div>
            </button>
          </Link>
          <Link href="/6-8/matching" passHref>
            <button className={styles.gameButton}>
              <div className={styles.gameContainer}>
                <h1 className={styles.gameHeader}>Word Match</h1>
                <h2 className={styles.gameSub}>Job 2</h2>
              </div>
            </button>
          </Link>
          <Link href="/6-8/planets" passHref>
            <button className={styles.gameButton}>
              <div className={styles.gameContainer}>
                <h1 className={styles.gameHeader}>Planets</h1>
                <h2 className={styles.gameSub}>Job 3</h2>
              </div>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
