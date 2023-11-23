// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar.js';
import Acceuil from './Acceuil';
import Connection from './Connection';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/Connection" element={<Connection/>} />
          <Route path="/" element={<Acceuil/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
