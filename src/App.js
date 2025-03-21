import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/herosection';
import WelcomeSection from './components/welcomesection';
import MeetDirector from "./components/meetdirector";
import PopularServicePage from './pages/popularservicepage';  // Import the page
import Footer from './components/footer';
import './global.css';  // Import global CSS

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero /> {/* Hero section */}
              <WelcomeSection /> {/* Welcome section */}
              <MeetDirector /> 
              <PopularServicePage />
            </>
          }
        />
        <Route path="/popular-services" element={<PopularServicePage />} /> {/* Add route for Popular Service Page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
