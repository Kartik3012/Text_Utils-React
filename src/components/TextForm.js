import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("Upper case is fired" +text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted text to Upper Case","Success");
    }

    const handleLowClick=()=>{
        // console.log("Upper case is fired" +text)
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted text to Lower Case","Success");

    }

    const Clear=()=>{
        // console.log("Upper case is fired" +text)
        let newText="";
        setText(newText);
        props.showAlert("Cleared text","Success");

    }

    const handleCapClick=()=>{
        // console.log("Upper case is fired" +text)
        let newText="";
        for ( let item of text.split(/[ ]+/))
        {
            let tempText="";
            if(item[0]!==undefined)
            {
                tempText+=item[0].toUpperCase();
                tempText+=item.substring(1,item.length).toLowerCase();
                newText+=tempText+" ";  
            }
        }
        
        setText(newText.substring(0,newText.length));
        props.showAlert("Converted Capitalize Case","Success");

    }

    const handleExtraSpaces=()=>{
        // console.log("Upper case is fired" +text)
        let newText=text.split(/[ ]+/);
        
        
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","Success");

    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        
        props.showAlert("Copied To ClipBoard!","success");
    }

    const handleOnChange=(event)=>{
        // console.log("Onchange")  
        setText(event.target.value);
    }

    let btn_col;
    if(props.mode==='light')
    {
        btn_col='primary';
    }
    else if(props.mode==='dark')
    {
        btn_col='dark';
    } 
    // else if(props.mode==='red')
    // {
    //     btn_col='danger';
    // } 
    // else if(props.mode==='blue')
    // {
    //     btn_col='info';
    // } 
    // else if(props.mode==='green')
    // {
    //     btn_col='success';
    // } 
    const[text,setText]=useState(""); //Text is a state variable
    //text="SDSD" --> WRONG Way to change text
    //setText("asdasasd")---> Right way to change text
  return (

    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'} `}>
         {/* props.alert &&  {props.showAlert} */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={ {backgroundColor: props.mode==='light'?'white':'#1c1f24' ,
                 color: props.mode==='light'?'black':'white' } }id="myBox" rows="8"></textarea>
       </div>
       <button disabled={text.length===0} className={`btn btn-${btn_col} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
       <button disabled={text.length===0} className={`btn btn-${btn_col} mx-1 my-1`} onClick={handleLowClick}>Convert to Lowercase</button>
       <button disabled={text.length===0} className={`btn btn-${btn_col} mx-1 my-1`} onClick={Clear}>Clear Text</button>
       <button disabled={text.length===0} className={`btn btn-${btn_col} mx-1 my-1`} onClick={handleCapClick}>Convert to Capitalize Case</button>
       <button disabled={text.length===0} className={`btn btn-${btn_col} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       <button disabled={text.length===0} className={`btn btn-${btn_col} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>




    </div> 
    <div className={`container text-${props.mode==='light'?'dark':'light'} my-3 `}>
        <h2> Your Text Summary</h2>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008* text.split(/\s+/).filter((element)=>{return element.length!==0}).length.toFixed(2)}</b>    Minutes to read </p>
        <h2>Preview:</h2>
        <p>{text.length>0?text:"Enter something in the textarea to preview it"}  </p>
    </div> 
    </>
  )
}

TextForm.propTypes={
    heading: PropTypes.string
}

TextForm.defaultProps={
    heading: "Enter Text"
}
