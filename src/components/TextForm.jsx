import React, { useState } from 'react'


function TextForm(props) {
    const[text,setText]=useState("Enter Your text here")

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClearClick=()=>{
        let newText='';
        setText(newText)
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode==='dark'? 'grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} Words , {text.length} Characters.</p>
        <p>You can read this in about {.25*text.length} seconds</p>
    </div>
    </>
  )
}

export default TextForm