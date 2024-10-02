import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './views/pages/Home'
import Projects from './views/pages/Projects'
import Contact from './views/pages/Contact'
import NotFound from './views/pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;