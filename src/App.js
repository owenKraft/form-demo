import './App.css';
import React from 'react'
import SidePanel from './components/SidePanel';
import FormContainer from './components/FormContainer';
import ColorBar from './components/ColorBar';

function App() {
  return (
    <div className="app">
      <ColorBar />
      <FormContainer />
      <SidePanel />
    </div>
  );
}

export default App;
