import React from 'react';
import logo from './logo.svg';
import './arjunblog.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <header className="App-header">
        <div className='logo'>
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Arjun Blog</h1>
        </div>
        <nav className="header-nav">
           <a href="/">Home</a>
           <a href="/about">About</a>
           <a href="/contact">Contact</a>
        </nav>
        
      </header>
      
            <Routes>
       
              <Route path="/" element={<BlogListPage />} />

       
              <Route path="/blogs/:id" element={<BlogDetailPage />} />
           </Routes>
      </Router>
  );
}

export default App;
