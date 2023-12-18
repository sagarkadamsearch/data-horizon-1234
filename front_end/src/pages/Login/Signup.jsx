import React, { useState } from 'react'
import Header from '../../components/Common/Header'
import Footer from '../../components/Common/Footer/footer'
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'


const GridBox = styled(motion.div)`
  padding: 25px 65px;
  border: 1px solid var(--blue);
  margin-bottom: 10px;
  display: flex;
  height: auto;
  width: 30%;
  margin: 5% auto;
  flex-direction: column;
  align-items: center;
  background-color: var(--darkgrey);
`;

function Signup() {

  const [fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate()

  const handlSingup=()=>{
      const payload={
          fname,
          lname,
          email,
          password
      }
      fetch("https://investmaster.cyclic.app/users/register",{
          method:"POST",
          headers:{
              "content-type":"application/json"

          },
          body:JSON.stringify(payload)
      })
      .then(res=>res.json())
      .then((data)=>{
        navigate("/signin")
        console.log(data)
      })
      .catch(err=>console.log(err))
  }
    
  return (
    <div>
      <Header/>
        <GridBox>
          <h3>SignUp</h3>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={fname}
            onChange={(e)=>setFname(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lname}
            onChange={(e)=>setLname(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <input
            type="password"
            placeholder="Password"
            name="pass"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <button style={{ padding: "8px 16px", border:"none", borderRadius:"5px", cursor:"pointer", marginBottom: "10px", backgroundColor:"var(--blue)" }} onClick={handlSingup}>
            SignUp
          </button>
          <a href='/signin' style={{cursor:"pointer", color:"blue"}}>already have an account signin here</a>
      </GridBox>
      <Footer />
    </div>
  )
}

export default Signup
