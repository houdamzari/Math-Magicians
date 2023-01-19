import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import './App.css';
import Calculator from './components/Calculator';

const App = () => (
  <>
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="nav__item">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route
        path="/"
        element={(
          <>
            <h1 className="home__heading">Welcome to our page</h1>
            <p className="home__paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              expedita sint nemo ab voluptatem temporibus possimus explicabo
              maxime cumque. Minus cum necessitatibus non fugiat expedita minima
              impedit pariatur quae corporis! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quo expedita sint nemo ab
              voluptatem temporibus possimus explicabo maxime cumque. Minus cum
              necessitatibus non fugiat expedita minima impedit pariatur quae
              corporis!
            </p>
          </>
        )}
      />
      <Route path="/calculator" element={<Calculator />} />
      <Route
        path="/quote"
        element={(
          <>
            <p className="quote__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ab
              possimus atque nulla excepturi impedit! Ipsam ipsa saepe, ut illo
              hic aliquam officiis non ratione minus dolorum unde quis sed!
            </p>
          </>
        )}
      />
    </Routes>
  </>
);

export default App;
