// import logo from './logo.svg';
import{ BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
  
import './App.css';
import About from './components/About';
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
  
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   // document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')

  // }
  const toggleMode=()=>{
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls)
    if(mode !=='dark')
    {
      
      setMode("dark");
      document.body.style.backgroundColor='#1c1f24';
      showAlert("Dark Mode has Been Enabled","Success");
      // document.title="Text-Utils Home|Dark";
     
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has Been Enabled","Success");
      // document.title="Text-Utils Home|Light";


    }
  }



  return (
    <>

    <Router>

    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar />  */}
    {/*  Will Use default props*/}

    <Alert alert={alert}/>


    <div className="container my-3  ">
    <Routes>
      <Route exact path="/Text_Utils-React/" element={<TextForm heading="Text Utils- Word Counter | Character Counter | Case Converter"  mode={mode}  showAlert={showAlert}/>} />
      {/* <TextForm heading="Enter the Text to Analyze"  mode={mode}  showAlert={showAlert}/> */}
      {/* <About mode={mode}/> */}
      <Route exact path="/Text_Utils-React/about" element={<About mode={mode}/>} />
    </Routes>
    </div>
    </Router>

    </>
  );
}

export default App;
