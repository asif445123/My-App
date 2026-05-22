//import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
  setAlert({ msg: message, type: type });
  setTimeout(() => {
    setAlert(null);
  }, 1000);
};
  const removeBodyClasses=()=>{document.body.classList.remove('bg-light');document.body.classList.remove('bg-dark')
  ;document.body.classList.remove('bg-warning');document.body.classList.remove('bg-danger');document.body.classList.remove('bg-success');document.body.classList.remove('bg-primary')}  
  const togleMode = (cls="") => {removeBodyClasses();document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "purple";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";}
      else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      // ⚠️ Avoid infinite intervals — they keep stacking every time mode toggles
      // Instead, use just one or none
      // setInterval(() => { document.title = "TextUtils is Amazing Mode"; }, 2000);
      // setInterval(() => { document.title = "Install TextUtils Now"; }, 1500);
    }
  };

  return (
    <><Router>
<Navbar title="TextUtils" aboutText="About" mode={mode} togleMode={togleMode} />
<Alert alert={alert} />
<div className='container my-3'>
  <Routes>
<Route exact path="/about" element={<About mode={mode}/>}>
</Route>
<Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />}>
</Route>
</Routes>
</div>
</Router>

</>);}
    


export default App;
