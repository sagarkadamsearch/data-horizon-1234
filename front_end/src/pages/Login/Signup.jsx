import React, { useState } from 'react'
import Header from '../../components/Common/Header'
import Footer from '../../components/Common/Footer/footer'
import styled from "styled-components";
import { motion } from "framer-motion";


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

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email:"",
        pass:"",
      });

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
        ...user,
        [name]: value,
    });
    };
    
  return (
    <div>
      <Header/>
        <GridBox>
          <h3>SignUp</h3>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <input
            type="text"
            placeholder="Password"
            name="pass"
            value={user.pass}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <button style={{ padding: "8px 16px", border:"none", borderRadius:"5px", cursor:"pointer", marginBottom: "10px", backgroundColor:"var(--blue)" }}>
            SignUp
          </button>
          <a href='/signin' style={{cursor:"pointer", color:"blue"}}>already have an account signin here</a>
      </GridBox>
      <Footer />
    </div>
  )
}

export default Signup
