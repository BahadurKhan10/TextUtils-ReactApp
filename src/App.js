import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
// import Modes from './component/Modes';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";





function App() {


  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#031b37'
      showAlert("Dark mode is enabled", "success")
      document.title = "TextUtils - Dark Mode"


      // Title will blink with this
      // setInterval(() => {
      //   document.title = "Install TextUtils"
      // }, 1200);

      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      // }, 2100);
    }

    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled", "success")
      document.title = "TextUtils - Light Mode"
    }




  }
  return (
    <>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        </div>
        
        {/* <Router> */}

          {/* <Switch>
            <Route exact path="/about">
              <About/>
            </Route>asad
            <Route exact path="/"> */}
              {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> */}
            {/* </Route>
          </Switch> */}


      {/* </Router> */}
      {/* <About/> */}
      {/* <Modes/> */}

    </>
  );
}

export default App;
