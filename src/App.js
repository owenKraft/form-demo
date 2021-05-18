import './App.css';
import React from 'react'
import SidePanel from './components/SidePanel';
import FormContainer from './components/FormContainer';

function App() {
  return (
    <div className="app">
      <FormContainer />
      <SidePanel />
    </div>
  );
}

export default App;
