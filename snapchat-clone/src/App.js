import './App.css';
import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
          {/* <Route exact path='/' element={<Nav/>} /> */}
          <Route  path='/' element={<Home/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
