import React from 'react'
import {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Upper case was clicked"+text)
        let newText=text.toUpperCase()
        setText(newText)
        // props.showAlert("Text is converted to Uppercase","success")
    }

    const handlelowClick=()=>{
        // console.log("Upper case was clicked"+text)
        let newText=text.toLowerCase()
        setText(newText)
        // props.showAlert("Text is converted to lowercase","success")
    }
    
    const handletitClick=()=>{
        // console.log("Upper case was clicked"+text)
        let newText=titleCase(text)
        setText(newText)
    }

    const handleclearClick=()=>{
        // console.log("Upper case was clicked"+text)
        let newText=""
        setText(newText)
        
    }
    
    const handleOnChange=(event)=>{
        // console.log("On changed")
        setText(event.target.value)
    }

    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');

      }



     // FUCNTION FOR FILE TO SAVE 
     const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
        props.showAlert("File has been downloaded","info")
}

    const [text, setText] = useState("");
    return (
        <>
            <div>
                <div className="mb-3" style={{color: props.mode==='dark' ||'Red' || 'Blue' ?'white':'black'}}>
                <label htmlFor="myBox" className={`form-label my-4 text-${props.mode==='light'?'dark':'light'}`}><h1>{props.heading}</h1></label>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handletitClick}>Convert to Titlecase</button>
                <button className='btn btn-secondary' onClick={downloadTxtFile}>Download Text</button>
                <button type="button" className="btn btn-dark mx-2" onClick={handleclearClick}>Clear</button>
                
            </div>
            <div className={`container  my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} minutes required to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter text in textbox to preview here'}</p>
            </div>
        </>
    )
}
