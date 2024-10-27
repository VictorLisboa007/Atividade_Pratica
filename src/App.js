import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventosPage from './pages/EventosPage';
import ParticipantesPage from './pages/ParticipantesPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<EventosPage />} />
                <Route path="/eventos/:id/participantes" element={<ParticipantesPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
