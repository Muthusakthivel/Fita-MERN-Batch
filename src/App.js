import React from 'react';
import './styles/ui-styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SimpleFormSubmition from './components/simple-form';

function App() {
  return (
    <div>
    <h1>Welcome to React</h1>
    <SimpleFormSubmition></SimpleFormSubmition>
    </div>
  );
}

export default App;
