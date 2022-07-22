// import logo from './logo.svg';
// import{ BrowserRouter as Router,
//   Routes,
//   Route} from "react-router-dom";
  
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';


function App() {

  const [mode,setMode]=useState("light")
  // const [Redmode,setRMode]=useState("light")
  // const [Bluemode,setBMode]=useState("light")
  // const [Greenmode,setGMode]=useState("light")


  const [alert,setAlert]=useState(null)

  const showAlert = (message,type)=>{

    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  

  const toggleMode=()=>{

    if(mode !=='dark')
    {
      setMode("dark");
      document.body.style.backgroundColor='#1c1f24';
      showAlert("Dark Mode has Been Enabled","Success");
      document.title="Text-Utils Home|Dark";
     
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has Been Enabled","Success");
      document.title="Text-Utils Home|Light";


    }
  }



  return (
    <>

    {/* <Router> */}

    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar />  */}
    {/*  Will Use default props*/}

    <Alert alert={alert}/>


    <div className="container my-3  ">
    {/* <Routes>
      <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze"  mode={mode}  showAlert={showAlert}/>} /> */}
      <TextForm heading="Enter the Text to Analyze"  mode={mode}  showAlert={showAlert}/>
      {/* <Route exact path="/about" element={<About/>} />
    </Routes> */}
    </div>
    {/* </Router> */}

    </>
  );
}

export default App;
