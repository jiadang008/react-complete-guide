import React, { useState } from 'react';
import Login from './components/login'
import Home from './components/home'
import Contact from './components/signup'
import About from './components/about'
import {
  BrowserRouter ,

  Route,

} from "react-router-dom";
import './App.css';

function App() {
  // const [state,setState]=useState({});
  // const userFunction=((e)=>{
  //   state[e.target.id]=e.target.value;
  //   setState({...state})
  // })
  // const clickFunction=(()=>{
  //   console.log(state)
  // })
    return (
    <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Contact}/>
    <Route path="/about" component={About}/>
    </BrowserRouter>
     
      
     
    );
}

export default App;