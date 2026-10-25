import React from 'react'

const App = () => {
  const getData=async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await res.json();
    console.log(data);
    
    

  }
  return (
    <div>
      <button onClick={getData}>ClickOn</button>
    </div>
  )
}

export default App