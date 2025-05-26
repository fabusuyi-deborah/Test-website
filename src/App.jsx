import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Sect2 from './components/Sect2.jsx';
import Sect3 from './components/Sect3.jsx';
import Sect4 from './components/Sect4.jsx';
import Sect5 from './components/Sect5.jsx';
import Pricing from './components/Pricing.jsx';
import Comm from './components/Comm.jsx';
import QandA from './components/QandA.jsx';
import Signup from './components/Signup.jsx';
import Footer from './components/Footer.jsx';
// import  Plans from './components/Plans.jsx';

const App = () => {
  return (
    <div>
    <Nav />
      <Hero />
      <Sect2 />
      <Sect3 />
      <Sect4 />
      <Sect5 />
      <Pricing />
      <Comm />
      <QandA />
      <Signup />
      <Footer />
      {/* <Plans /> */}
      </div>
  );
}


export default App;
