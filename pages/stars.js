import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.starsContainer}>
          <div className={styles.starsJob}>
            <h1 className={styles.starsTitle}>
              Meet Alex, a Data Scientist and Machine Learning Practitioner with
              NASA's Earth Science and Remote Sensing Unit.
            </h1>
            <div className={styles.videoContainer}>
              <video
                src={require('../public/rocket-interview.mp4')}
                autoPlay
                controls
              />
            </div>
          </div>
          <div className={styles.starsJob}>
            <h1 className={styles.starsTitle}>
              Meet Robert, a Habitability Domain Lead and CO-Lead Center for
              Design and Space architecture at NASA.
            </h1>
            <div className={styles.videoContainer}>
              <video src={require('../public/planet-interview.mp4')} controls />
            </div>
          </div>
          <div className={styles.starsJob}>
            <h1 className={styles.starsTitle}>
              Meet Nate, a Pointing Flight Controller at NASA.
            </h1>
            <div className={styles.videoContainer}>
              <video
                src={require('../public/wordmatch-interview.mp4')}
                controls
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
