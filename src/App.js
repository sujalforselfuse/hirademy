import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './components/Home'
import Books from './pages/Books';
import Bookpage from './pages/Bookpage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Bookpage />} />
      </Routes>
    </Router>
  );
}

export default App;
