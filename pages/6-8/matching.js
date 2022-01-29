import Head from 'next/head';
import styles from '../../styles/Matching.module.css';
import React, { useState } from 'react';

const matchingData = [
  ['Density', 'amount per unit size'],
  ['Gravity', 'the force of attraction between masses'],
  ['Matter', 'that which has mass and occupies space'],
  [
    'Potential Energy',
    'energy stored by a body or system by virtue of its position',
  ],
  ['Speed', 'the rate of which something happens'],
];

export default function Home() {
  const [current, setCurrent] = useState(null);

  let storeWord = function (e) {
    console.log(e.target.value);
    if (current) {
    } else {
      setCurrent(e.target.value);
    }
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
          {matchingData
            .sort(() => Math.random() - 0.5)
            .map((word) => {
              return (
                <button
                  onClick={storeWord}
                  value={word[0]}
                  key={word[0]}
                  className={current && current === word[0] ? 'selected' : ''}
                >
                  {word[0]}
                </button>
              );
            })}
        </div>
        <div className={styles.definitionContainer}>
          {matchingData.map((definition) => {
            return (
              <button
                onClick={storeDef}
                value={definition[1]}
                key={definition[1]}
              >
                {definition[1]}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
