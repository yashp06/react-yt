import React, { useState } from 'react'

const App = () => {
  const[name,setName]=useState("");
  const submitHandeler= (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setName("");
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandeler(e);
      }}>
        <input type='text' placeholder='Enter name' value={name} 
        onChange={(e)=>{
          setName(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App