import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';

const App = () => (
  <>
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <NavBar />

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
            <NavBar />
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
