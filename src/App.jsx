import React from 'react'
import Nav from './Nav'
import Body from './Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Python from './Python'
import Sql from './Sql'
import R from './R'
import Html from './Html'
import JavaScript from './JavaScript'
import Java from './Java'
import C from './C'
import Cplus from './Cplus'
import Kotlin from './Kotlin'
import TypeScript from './TypeScript'
import Swift from './Swift'
import DSA from './DSA'
import NumPy from './NumPy'
import Pandas from './Pandas'
import Rust from './Rust'
import Ruby from './Ruby'
import Css from './Css'
import Go from './Go'
import Chash from './Chash'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/Python' element={<Python />} />
        <Route path='/Sql' element={<Sql/>}/>
        <Route path='R' element={<R/>}/>
        <Route path='Html' element={<Html/>}/>
        <Route path='Css' element={<Css/>}/>
        <Route path='JavaScript' element={<JavaScript/>}/>
        <Route path='TypeScript' element={<TypeScript/>}/>
        <Route path='Java' element={<Java/>}/>
        <Route path='C' element={<C/>}/>
        <Route path='Cplus' element={<Cplus/>}/>
        <Route path='Chash' element={<Chash/>}/>
        <Route path='Go' element={<Go/>}/>
        <Route path='Kotlin' element={<Kotlin/>}/>
        <Route path='Swift' element={<Swift/>}/>
        <Route path='DSA' element={<DSA/>}/>
        <Route path='NumPy' element={<NumPy/>}/>
        <Route path='Pandas' element={<Pandas/>}/>
        <Route path='Rust' element={<Rust/>}/>
        <Route path='Ruby' element={<Ruby/>}/>
        


      </Routes>
    </BrowserRouter>
  )
}

export default App
