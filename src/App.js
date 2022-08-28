import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import FbState from './context/feedback';
import Dashboard from './pages/Dashboard';
import Feedback from './pages/Feedback';

import './App.css'

const App = () => {
  return (
    <>
        <Router>
                <FbState >
            <Routes>
                <Route path='/' exact element={<Dashboard />} />
                <Route path='/feedback' exact element={<Feedback />} />
            </Routes>
                  </FbState>
        </Router>
    </>
  )
}

export default App
