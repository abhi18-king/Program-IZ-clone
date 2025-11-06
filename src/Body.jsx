import React from 'react'
import "./Body.css"
import { useNavigate } from 'react-router-dom'

function Body(){

    var navigate= useNavigate()
  

    return(
        <div>
            <h1 id='h1'>Learn Programiz For Free</h1>

            <div id='div2'>
            <button onClick={()=> navigate('/Python')} className='btn1'>Python</button>
            <button onClick={()=> navigate('/Sql')}className='btn1'>SQL</button>
            <button onClick={()=> navigate('/R')}className='btn1'>R</button>
            <button onClick={()=> navigate('/Html')}className='btn1'>HTML</button>
            <button onClick={()=> navigate('/Css')}className='btn1'>CSS</button>
            <button onClick={()=> navigate('/JavaScript')}className='btn1'>JavaScript</button>
        </div>
        <div id='div3'>
            <button onClick={()=> navigate('/TypeScript')} className='btn2'>TypeScript</button>
            <button onClick={()=> navigate('/Java')} className='btn2'>Java</button>
            <button onClick={()=> navigate('/C')}className='btn2'>C</button>
            <button onClick={()=> navigate('/Cplus')}className='btn2'>C++</button>
            <button onClick={()=> navigate('/Chash')}className='btn2'>C#</button>
            <button onClick={()=> navigate('/Go')}className='btn2'>Go</button>
        </div>
        <div id='div4'>
            <button onClick={()=> navigate('/Kotlin')} className='btn3'>Kotlin</button>
            <button onClick={()=> navigate('/Swift')}className='btn3'>Swift</button>
            <button onClick={()=> navigate('/DSA')}className='btn3'>DSA</button>
            <button onClick={()=> navigate('/NumPy')}className='btn3'>NumPY</button>
            <button onClick={()=> navigate('/Pandas')}className='btn3'>Pandas</button>
            <button onClick={()=> navigate('/Rust')}className='btn3'>Rust</button>
        </div>

        <div id='div5'>
            <button onClick={()=> navigate('/Ruby')} className='btn4'>Ruby</button>
        </div>
            
            
        </div>
    )
}
export default Body