import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TemplatesPage from './pages/TemplatePage';
import AboutPage from './pages/About';
import Header from './components/Header';
import CreateNewResumePage from './pages/CreateNewResumePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create-resume" element={<CreateNewResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;