import React from 'react'
import Header from '../../components/Common/Header/index'
import Footer from '../../components/Common/Footer/footer'

function AdminDashboard() {
  return (
    <div>
      <Header/>
      <div style={{height:"60vh", color:"white", textAlign:"center", paddingTop:"50px"}}>
        Admin Dashboard
      </div>
      <Footer/>
    </div>
  )
}

export default AdminDashboard
