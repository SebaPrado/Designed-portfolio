import React, { useState, useEffect } from 'react'

function About() {


  return (
    <>
    <div>About</div>
     <div className='flexbox-container'>
      <div className='flexbox-item'>con flex-wrap: wrap</div>
      <div className='flexbox-item flexbox-item1 '> flexbox1</div>
      <div className='flexbox-item flexbox-item2'> flexbox2</div>
      <div className='flexbox-item flexbox-item3'>flexbox3</div>

     </div>
     <div className='flexbox-container2'>
      <div className='flexbox-item flexbox-item4 '> flexbox4 tiene un flex-shrink: 0</div>
      <div className='flexbox-item flexbox-item5'> flexbox5 flex-shrink:2</div>
      <div className='flexbox-item flexbox-item6'>flexbox6 tiene un flex-grow: 1</div>

     </div>
     <div className='flexbox-container3'>
      <div className='flexbox-item flexbox-item7 '> flexbox 7</div>
      <div className='flexbox-item flexbox-item8'> flexbox 8 </div>
      <div className='flexbox-item flexbox-item9'>flexbox 9 </div>

     

     </div>
    </>
  )
}

export default About