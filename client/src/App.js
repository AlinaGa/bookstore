import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import BookList from './components/bookList';
import Book from './components/book';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/bookshelf" element={BookList} />
        <Route path="/bookshelf/:id" element={Book} />
      </Routes>
    </Router>
  );
};

export default App;
