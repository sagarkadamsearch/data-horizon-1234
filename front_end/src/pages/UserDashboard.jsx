import React from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer/footer'

function UserDashboard() {
  return (
    <div>
      <Header/>
      <div style={{height:"60vh", color:"white", textAlign:"center", paddingTop:"50px"}}>
        User Dashboard
      </div>
      <Footer/>
    </div>
  )
}

export default UserDashboard
