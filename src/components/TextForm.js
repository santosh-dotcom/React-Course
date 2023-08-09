import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();        
        setText(newText);
    }

    const handleLoClick = ()=>{
      // console.log("UpperCase was clicked" + text);
      let newText = text.toLowerCase();        
      setText(newText);
  }

  const handleClearClick = ()=>{
    // console.log("UpperCase was clicked" + text);
    let newText = " ";        
    setText(newText);
}

    const handleOnChange = (event)=>{
        // console.log("handle unchnage");
        setText(event.target.value);
    }

    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();      
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const [text, setText] = useState('Enter text here');

    //text = "new text"; //wrong way to change the state
    //setText = ("New text"); // Correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra space</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p> {text.split(" ").length} Words, {text.length} Characters</p>
      <p> {0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview Here"}</p>
    </div>
    </>
  );
}
