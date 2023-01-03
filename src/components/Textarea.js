import React, { useState } from 'react'

const Textarea = ({ heading, mode, showAlert }) => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleToUpperCaseChange = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Converted to upper case!", "success")
    }
    
    const handleToLowerCaseChange = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Converted to lower case!", "success")
    }
    const handleToClearText = () => {
        setText("");
        showAlert("Text Cleared!", "success")
    }
    const handleCopy = () => {
        let text = document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        showAlert("Copied to Clipboard!", "success")
    }
    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        showAlert("Extra Spaces Removed!", "success")
    }
    
    const handleToCaptalized = () => {
        const newText = text.split(' ');
        let CaptializedText = '';
        newText.map((curr) => {
            if (curr !== "") {
                CaptializedText += curr[0].toUpperCase();
                for (let i = 1; i < curr.length; i++)CaptializedText += curr[i];
                CaptializedText += ' ';
            }
        });
        setText(CaptializedText);
        showAlert("Text Capitalized!", "success")
    }

    return (
        <>
            <div className="container my-3" >
                <h1>{heading}</h1>
                <div className="mb-3 " >
                    <textarea
                        type="text" value={text}
                        style={mode === "dark" ? { backgroundColor: "grey", color: 'white' } : { backgroundColor: 'white', color: 'black' }}
                        onChange={handleChange} id="my-box" className="form-control" rows="8" placeholder="Please Enter text here"
                    >
                    </textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleToUpperCaseChange}>Convert to UPPER CASE</button>
                <button className='btn btn-primary mx-1' onClick={handleToLowerCaseChange}>Convert to lower case</button>
                <button className='btn btn-primary mx-1' onClick={handleToCaptalized}>Convert to Captalized</button>
                <button className='btn btn-primary mx-1' onClick={handleToClearText}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" >
                <h2>Your Text Summary</h2>
                <p>{`${text.split(' ').length} words and ${text.length}characters`}</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
            </div>
        </>
    )
}

export default Textarea