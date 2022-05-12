import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'

function App() {

    const Home = () => {
        return (
            <h3 style={{ padding: "10px" }}>Home</h3>
        )
    }

    const Shop = () => {
        return (
            <h3 style={{ padding: "10px" }}>Shop</h3>
        )
    }

    return (
        <div className="app">
            <h1>Webpack Routing Check</h1>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App
