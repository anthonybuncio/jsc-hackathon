import Head from 'next/head';
import styles from '../../styles/Matching.module.css';
import { useState } from 'react';

const matchingData = [
  {
    word: 'Density',
    definition: 'amount per unit size',
  },
  {
    word: 'Gravity',
    definition: 'the force of attraction between masses',
  },
  {
    word: 'Matter',
    definition: 'that which has mass and occupies space',
  },
  {
    word: 'Potential Energy',
    definition: 'energy stored by a body or system by virtue of its position',
  },
  {
    word: 'Speed',
    definition: 'the rate of which something happens',
  },
  {
    word: 'Velocity',
    definition: 'distanced travel per unit time in one direction',
  },
  {
    word: 'Kinetic Energy',
    definition: 'the mechanical energy that a body has by virtue of motion',
  },
];

export default function Home() {
  const [currentWord, setCurrentWord] = useState('');
  const [currentDefinition, setCurrentDefinition] = useState('');
  const [currentIndex, getCurrentIndex] = useState(null);

  let storeWord = function (e) {
    console.log(e.target.value);
  };

  let storeDef = function (e) {
    console.log(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ready, Set, STEM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.matchingMain}>
        <div className={styles.wordContainer}>
          {matchingData.map((word) => {
            return (
              <button onClick={storeWord} value={word.word} key={word.word}>
                {word.word}
              </button>
            );
          })}
        </div>
        <div className={styles.definitionContainer}>
          {matchingData.map((definition) => {
            return (
              <button
                onClick={storeDef}
                value={definition.definition}
                key={definition.definition}
              >
                {definition.definition}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
