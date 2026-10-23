import React from 'react'
import Card from './comonents/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Yash" age={18} img='https://plus.unsplash.com/premium_photo-1791775568284-94c03e1ae2af?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Card user="Devansh" age={15} img='https://plus.unsplash.com/premium_photo-1792577908866-76508390d104?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      
    </div>
  )
}

export default App