import React from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer/footer'
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import TextField from '@mui/material/TextField';

function Login() {
    
  return (
    <div>
      <Header/>
      <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="Email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        margin="normal"
      />
      <Button color="primary">
        Login
      </Button>
    </Box>
      <Footer/>
    </div>
  )
}

export default Login
