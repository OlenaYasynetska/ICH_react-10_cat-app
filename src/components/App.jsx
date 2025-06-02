// src/App.js
import React from 'react';
import CatImage from './CatImage/CatImage';
import styles from './CatImage/CatImage.module.css';

function App() {
  return (
    <div className={styles.app}>
      <CatImage />
    </div>
  );
}

export default App;

