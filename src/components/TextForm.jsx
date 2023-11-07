import React, { useState } from 'react'


function TextForm(props) {
    const[text,setText]=useState("Enter Your text here")

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    <div className='container my-3'>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} Words , {text.length} Characters.</p>
        <p>You can read this in about {.25*text.length} seconds</p>
    </div>
    </>
  )
}

export default TextForm