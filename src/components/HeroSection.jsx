import React, { useEffect } from 'react';
import { useState } from 'react';

export default function HeroSection() {
  const [heroText, setText] = useState(
    'Russian National State Farm Bank'.toUpperCase()
  );
  const [isFlashed, setFlash] = useState(false);

  const [fade, setFade] = useState('opacity-0');
  setTimeout(() => {
    setFade('');
  }, 2000);

  function flashingText() {
    if (!isFlashed) {
      setFlash(true);
      const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
      let iteration = 0;

      const interval = setInterval(() => {
        setText(
          heroText
            .split('')
            .map((letter, index) => {
              if (index < iteration || letter === ' ') {
                return heroText[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join('')
        );

        if (iteration >= heroText.length) {
          setFlash(false);
          clearInterval(interval);
        }

        iteration++;
      }, 35);
    }
  }

  return (
    <main className="h-screen bg-blue-700 px-12 py-16 flex items-center">
      <div className="heroText mx-auto flex items-center flex-col gap-3">
        <h1
          onMouseOver={flashingText}
          className="font-bold text-center text-teal-200 text-6xl"
        >
          {heroText}
        </h1>
        <h2
          className={fade + ' transition duration-[2s] text-sky-300 text-2xl'}
        >
          We're scam everyone
        </h2>
      </div>
    </main>
  );
}
