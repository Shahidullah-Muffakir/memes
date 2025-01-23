import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './Footer'; // Assuming your Footer component is in the same folder
import Policy from './Policy'; // Create this component for your policy page
import Home from './Home';
import TermsOfService from './TermsOfService';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className="mainContainer">


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} /> {/* The route for Policy page */}
          <Route path="/terms" element={<TermsOfService />} /> {/* The route for Terms of service page page */}
        </Routes>

        {/* <Footer /> Include the Footer */}
        </div>
      </div>
    </Router>
  );
}



export default App;
