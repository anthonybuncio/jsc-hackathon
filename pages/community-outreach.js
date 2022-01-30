import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.visionContainer}>
          <h1 className={styles.visionTitle}>
            Directing underrepresented youths to community outreach program and
            camps
          </h1>
          <div>
            <ul>
              <li>
                <span>
                  Enter a raffle to win a free trip to Summer Camp at NASA!
                </span>
                <button>Learn More</button>
              </li>
              <li>
                <span>
                  Have your school partner with us to have annual field trips to
                  NASA centers
                </span>
                <button>Learn More</button>
              </li>
              <li>
                <span>
                  Connect with STEM-driven students in your local community
                </span>
                <button>Learn More</button>
              </li>
              <li>
                <span>STEM related online courses</span>
                <button>Learn More</button>
              </li>
              <li>
                <span>Find a NASA mentor</span>
                <button>Learn More</button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
