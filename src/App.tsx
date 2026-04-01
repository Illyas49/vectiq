import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Worldview from './components/TrustStrip';
import Capabilities from './components/WhatWeDo';
import OperatingModel from './components/HowWeWork';
import Partners from './components/Edge';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';

function App() {
  return (
    <div className="bg-surface-0 min-h-screen font-sans relative">
      <AmbientBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Worldview />
        <Capabilities />
        <OperatingModel />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
