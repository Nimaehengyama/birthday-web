import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Letter from './components/Letter';
import BirthdayPage from './components/BirthdayPage';
function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && <LandingPage onStart={() => setStep(1)} />}
      {step === 1 && <Timeline onNext={() => setStep(2)} />}
      {step === 2 && <Gallery onNext={() => setStep(3)} />}
      {step === 3 && <Letter onNext={() => setStep(4)} />}
      {step === 4 && <BirthdayPage />}
    </>
  );
}

export default App;
