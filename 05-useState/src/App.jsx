import React from 'react'
import { useState } from 'react'
const App = () => {
  const[num,setNum]=useState(0)
  function inc(){
    setNum(num+1);
  }
  function dec(){
    setNum(num-1);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button className='btn1' onClick={inc}>Increase</button>
      <button className='btn2' onClick={dec}>Decrease</button>
    </div>
  )
}

export default App