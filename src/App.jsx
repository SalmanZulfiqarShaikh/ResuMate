import React from 'react';
import './index.css'; // Tailwind imported here
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import FormatSelect from './pages/FormatSelect';
import FormPage from './pages/Form';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/format" element={<FormatSelect />} />
        <Route path="/form/:format" element={<FormPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
