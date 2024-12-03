import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './components/MainPage'
import { Join } from './components/Join'
import { Board } from './components/Board'
import { BoardWrite } from './components/BoardWrite'

// const joinBtn = () => {}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/join" element={<Join />} />
                <Route path="/board" element={<Board />} />
                <Route path="/write" element={<BoardWrite />} />
            </Routes>
        </Router>
    )
}

export default App
