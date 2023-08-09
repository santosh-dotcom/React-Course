import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import react, { useState } from 'react';

function App() {
  const[mode, setMode] = useState('light'); // whether dark mode is enabled or not.

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
}

  return (
    <>
      {/* <Navbar title="Textutils5" aboutText="About TextUtils"/> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}

    <div className="container my-3">
      <TextForm heading="Enter the text to analyse" mode={mode}/>
      {/* <About /> */}
    </div>

    </>
  );
}

export default App;
