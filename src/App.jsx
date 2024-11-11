// src/App.js
import React, { useEffect } from 'react';
import ProductPage from './pages/ProductPage';
import { setupMock } from './api/mockApi';

function App() {
  useEffect(() => {
    setupMock();
  }, []);

  return (
    <div className="App">
      <ProductPage />
    </div>
  );
}

export default App;