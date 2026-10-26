import React, { useEffect, useState } from 'react'

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  useEffect(()=>{
    console.log("useEffect is working");
  },[num1])
  return (
    <div>
      <h1>num1 value = {num1}</h1>
      <h1>num2 value = {num2}</h1>
      <button onClick={()=>{
        setNum1(num1+1);
      }}>btn1</button>
      <button onClick={() => {
        setNum2(num2+1)
      }}>btn2</button>
    </div>
  )
}

export default App