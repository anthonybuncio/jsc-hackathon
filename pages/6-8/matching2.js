import Header from '../../components/Header';
import styles from '../../styles/Matching.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div>
          <video
            src={require('../../public/wordmatch-interview.mp4')}
            autoPlay
            controls
          />
        </div>
      </main>
    </div>
  );
}
