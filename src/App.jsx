import React from 'react';
import Hero from './components/Hero.jsx';
import Spark from './components/Spark.jsx';
import Ascent from './components/Ascent.jsx';
import Finale from './components/Finale.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0e1a] text-white">
      <Hero />
      <Spark />
      <Ascent />
      <Finale />
    </div>
  );
}

export default App;
