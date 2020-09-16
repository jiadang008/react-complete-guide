import React, { useState } from 'react'

function Firstcomponent(){
    const [state,setState]=useState({});
    const userName=((e)=>{
        state[e.target.id]=e.target.value
        setState({...state})
    })
    const clickfunction=((e)=>{
        console.log(state)
    })
    return(
        <div>
            <input onChange={userName} placeholder="userName" id="userName"/>
            <input onChange={userName} placeholder="userName" id="fatherName"/>
            <input onChange={userName} placeholder="userName" id="friendName"/>
            <button onClick={clickfunction}>Submit</button>
        </div>
    )
}
export default Firstcomponent