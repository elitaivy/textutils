import React, {useState} from 'react'


export default function FormField() {
  
  const handleupclick= () =>{
    // console.log('btn clicked' + Text);
    let uppercasetext = Text.toUpperCase();
    setText(uppercasetext)
  }

  const handleOnChange = (event)=>{
    // console.log('onchange');
    setText(event.target.value)
  }

  const [Text, setText] = useState('')



  return (
    <div className='formfield mt-5'>
        <h2>Place Your Text Here</h2>
        <textarea className="form-control" rows="8" value={Text} onChange={handleOnChange} placeholder="Another input placeholder"/>  
        <div>
           <button className="btn btn-primary mt-3" onClick={handleupclick}>Uppercase</button>
        </div> 
    </div>
  )
}
