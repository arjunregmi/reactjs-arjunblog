import React from 'react';
import logo from './logo.svg';
import './arjunblog.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Arjun Blog</h1>
        <nav className="header-nav">
          <Router>
            <Routes>
       
              <Route path="/" element={<BlogListPage />} />

       
              <Route path="/blogs/:id" element={<BlogDetailPage />} />
           </Routes>
          </Router>
        </nav>
        
      </header>
    </div>
  );
}

export default App;
