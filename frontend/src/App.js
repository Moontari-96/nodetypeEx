import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './components/MainPage'
import { Join } from './components/Join'
import { Board } from './components/Board'
import { BoardWrite } from './components/BoardWrite'
import { BoardDetail } from './components/BoardDetail'
import { BoardModi } from './components/BoardModi'

// const joinBtn = () => {}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/join" element={<Join />} />
                <Route path="/board" element={<Board />} />
                <Route path="/write" element={<BoardWrite />} />
                <Route path="/detail/:seq" element={<BoardDetail />} />
                <Route path="/modi/:seq" element={<BoardModi />} />
            </Routes>
        </Router>
    )
}

export default App
