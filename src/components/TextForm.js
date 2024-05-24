import React,{ useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        settext(newText);
    }
    const handledownClick=()=>{
        let newText=text.toLowerCase();
        settext(newText);
    }
    const handleOnChange=(event)=>{
        settext(event.target.value)
    }
    const handleclearClick=()=>{
        let newText='';
        settext(newText);
    }
    const handlecopy=(event)=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        settext(newText.join(" "))
    }
    const [text, settext]= useState('#');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
    <label htmlFor="myBox" className="form-label">
        <h5>Example Textarea</h5>
    </label>

     <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'fffcc':'white',color:props.mode==='dark'?'black':'black'}}id="myBox" cols="100" rows="8"/> 
    
     </div>
     <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-3" onClick={handledownClick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-3" onClick={handleclearClick}>Clear Text</button>
  
    
     <button className="btn btn-primary mx-2" onClick={handlecopy} >Copy Text</button>
     <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extraspace</button>
    </div>

    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
    </div>
    </>
  )
}
