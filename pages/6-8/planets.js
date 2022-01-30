import Link from 'next/link';
import styles from '../../styles/Planets.module.css';
import { useState } from 'react';
import Header from '../../components/Header';

export default function Home() {
  const [textColor, setTextColor] = useState('black');

  let setColor = function (e) {
    console.log(e.target.value);
    setTextColor('green');
  };
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.planetsMain}>
        <div className={styles.planetsQuestion}>
          <h1>
            Only planet not to be named after a Greek or Roman deity, it was
            formed 4.54 billion years ago, the densest planet in the solar
            system.
          </h1>
        </div>
        <div className={styles.planetsAnswers}>
          <button onClick={setColor} value="Venus">
            Venus
          </button>
          <button onClick={setColor} value="Mars">
            Mars
          </button>
          <button onClick={setColor} value="Neptune">
            Neptune
          </button>
          <button onClick={setColor} value="Earth" style={{ color: textColor }}>
            Earth
          </button>
        </div>
        <div>
          <Link href="/6-8/planets2" passHref>
            <button>Next Question</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
