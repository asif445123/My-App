import React,{useState} from 'react'
//import PropTypes from 'prop-types';

export default function TextForm(props) { 
const handleUpClick = () =>{
//console.log("Upper Case was clicked" + text); 
let newText = text.toUpperCase();  setText(newText);
props.showAlert("Converted to Uppercase!","success");}

const handleLoClick = () =>{
let newText = text.toLowerCase();  setText(newText);
props.showAlert("Converted to Lowercase!","success");}

const handlePrClick = () => {let newText = text.toLowerCase().split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
setText(newText); 
props.showAlert("Converted to Propercase!","success");};

const handleClClick = () =>{
let newText ="";  setText(newText);
props.showAlert("Text Cleared!","success");}

const handleOnChange = (event) =>{console.log("On Change");setText(event.target.value);} 
  
const handleCopy = () =>{navigator.clipboard.writeText(text);
props.showAlert("Copy to Clipboard!","success");} 

const handleExtraSpaces = () =>{let newText = text.split(/[ ]+/); 
setText(newText.join(" "));
props.showAlert("Extra spaces removed!","success");} 


const[text,setText] = useState('');
        
return (<>
<div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
      
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control"  value={text} onChange={handleOnChange} 
style={{backgroundColor:props.mode==="dark"?"#af7ac5":"white",color :props.mode==="dark"?"white":"black"}}
id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-success mx-1 my-1'onClick={handleUpClick}>Upper Case</button>
<button disabled={text.length===0} className='btn btn-success mx-1 my-1'onClick={handleLoClick}>Lower Case</button>
<button disabled={text.length===0} className='btn btn-success mx-1 my-1'onClick={handlePrClick}>Proper Case</button>
<button disabled={text.length===0} className='btn btn-success mx-1 my-1'onClick={handleClClick}>Clear Text</button>
<button disabled={text.length===0} className='btn btn-success mx-1 my-1'onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className='btn btn-success mx-1 my-1'onClick={handleExtraSpaces}>Remove Extra Spaces</button>

</div>
<div className='container my-3' style={{color:props.mode==="dark"?"white":"black"}}><h2>Your Text Summery</h2><p>
{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words
and {text.length} Characters </p><p>{0.0008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
<h2>Preview</h2><p>{text.length>0?text:"Nothing to preview! "}</p></div>
</>)}
