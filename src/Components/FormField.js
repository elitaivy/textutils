import React, {useState} from 'react'


export default function FormField() {
  
  const handleupclick= () =>{
    // console.log('btn clicked' + Text);
    let uppercasetext = Text.toUpperCase();
    setText(uppercasetext)
  }

  const handlelowclick= () =>{
    // console.log('btn clicked' + Text);
    let lowercasetext = Text.toLowerCase();
    let str = Text.split(" ")
    // let lowercasetext = Text.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    setText(lowercasetext)
  }

  const copyClipboard = () => {
    let copytext = document.getElementById("myText");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
  }

  const removeExtraSpace = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event)=>{
    // console.log('onchange');
    setText(event.target.value)
  }

  const [Text, setText] = useState('')



  return (
    <div>
    <div className='formfield mt-5'>
        <h2>Place Your Text Here</h2>
        <textarea className="form-control" rows="8" id='myText' value={Text} onChange={handleOnChange} placeholder="Enter Your Text Here"/>  
        <div>
           <button className="btn btn-primary mt-3 mx-2" onClick={handleupclick}>UPPERCASE</button>
           <button className="btn btn-primary mt-3 mx-2" onClick={handlelowclick}>lowercase</button>
           <button className="btn btn-primary mt-3 mx-2" onClick={copyClipboard}>Copy Text</button>
           <button className="btn btn-primary mt-3 mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
        </div> 
    </div>
    <div className="counts">
      <button className="btn btn-primary mt-3 mx-2" >{Text.length} Characters</button>
      <button className="btn btn-primary mt-3 mx-2" >{Text.split(" ").filter((element)=> {return element.length!==0}).length} Words</button>
    </div>
    <div className="preview">
      <text>{Text}</text>
    </div>

    </div>
    
    
    
  )
}
