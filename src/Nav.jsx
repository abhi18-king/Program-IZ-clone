import React from 'react'
import "./Nav.css"

function Nav(){
    return(
        <div className='Nav'>
            <h2 style={{marginRight:'150px'}} ><b>PROGRAMIZ</b></h2>
            <h3 className='h3'>Tutorials</h3>
            <h3 className='h3'>Examples</h3>
            <h3 className='h3'>Courses</h3>
            <label htmlFor="">🔍</label>
            <input placeholder='search' type="text" />
            <button id='Login'>Login to pro</button>

        </div>
    ) 
}
export default Nav