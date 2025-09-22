import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
// import FormatSelect from './components/FormatSelect';
// import Form from './components/Form';
// import Result from './components/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/format" element={<FormatSelect />} />
        <Route path="/form" element={<Form />} />
        <Route path="/result" element={<Result />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
