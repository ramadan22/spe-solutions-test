import React from 'react';
import './assets/styles/tailwind.css';
import './assets/styles/styles.css';

import Products from './features/products';
import Header from './features/layout/Header';

function App() {
  return (
    <>
      <Header />
      <Products />
    </>
  );
}

export default App;
