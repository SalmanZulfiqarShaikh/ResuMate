import React from 'react';
import './index.css'; // Tailwind imported here
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import FormatSelect from './pages/FormatSelect';
import AtsForm from './pages/AtsForm';
import VisualForm from './pages/VisualForm';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/format" element={<FormatSelect />} />
        <Route path="/AtsForm" element={<AtsForm/>}/>
          <Route path="/VisualForm" element={<VisualForm/>}/>
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
