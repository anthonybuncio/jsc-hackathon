import Link from 'next/link';
import styles from '../styles/Games.module.css';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.buttonContainer}>
          <Link href="/6-8/planets" passHref>
            <button className={styles.selectButton}>
              <div className={styles.gameContainer}>
                <h1 className={styles.gameHeader}>Planets</h1>
                <h2 className={styles.gameSub}>Habitability Leader</h2>
              </div>
            </button>
          </Link>
          <Link href="/6-8/matching" passHref>
            <button className={styles.selectButton}>
              <div className={styles.gameContainer}>
                <h1 className={styles.gameHeader}>Word Match</h1>
                <h2 className={styles.gameSub}>Flight Control</h2>
              </div>
            </button>
          </Link>
          <Link href="/6-8/rockets" passHref>
            <button className={styles.selectButton}>
              <div className={styles.gameContainer}>
                <h1 className={styles.gameHeader}>Rockets</h1>
                <h2 className={styles.gameSub}>Data Science</h2>
              </div>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
