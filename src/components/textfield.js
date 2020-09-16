import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [state,setState]=useState({});
  const userFunction=((e)=>{
    state[e.target.id]=e.target.value;
    setState({...state})
  })
  const clickFunction=(()=>{
    console.log(state)
  })
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="userName" variant="outlined" id="userName" onChange={userFunction}/>
      <TextField id="outlined-basic" label="fatherName" variant="outlined" id="fatherName" onChange={userFunction}/>
      <TextField id="outlined-basic" label="friendName" variant="outlined" id="friendName" onChange={userFunction}/>
      <Button variant="contained" color="secondary" onClick={clickFunction}>Secondary</Button>
    </form>
  );
}
