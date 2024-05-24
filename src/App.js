import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/about';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]= useState('light');

  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(28, 3, 71)';
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
  <>

   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   
  <div className="container my-3 ">

          <TextForm heading="Enter the text to analyze" mode={mode}/>
        

      
        </div>
 

   
   
  
  </>
  
  );
}

export default App;
