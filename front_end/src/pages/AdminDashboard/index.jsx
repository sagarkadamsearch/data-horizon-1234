import React, { useState } from 'react'
import Header from '../../components/Common/Header/index'
import Footer from '../../components/Common/Footer/footer'
import styled from '@emotion/styled'
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Card from './Card';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Grid from '@mui/material/Grid';
import PaymentsIcon from '@mui/icons-material/Payments';
import YourComponent from './graphData';

function AdminDashboard() {
  
 const [isVisible,setIsVisible] = useState(true);
 const [activeName,setActiveName] = useState('users');

 const handleHamburger =()=>{
     setIsVisible(!isVisible);
  }




  return (
    <div>
      <Header/>
      {/* <div style={{height:"60vh", color:"white", textAlign:"center", paddingTop:"50px"}}>
        Admin Dashboard
      </div> */}
      <MAIN isVisible={isVisible} activeName={activeName}>
          <DIV>
            <div className='options' onClick={()=>setActiveName('dashboard')}>
              <span className='icon'><DashboardIcon /></span>
              <span className='names dashboard'>Dashboard</span>
            </div>
            <div className='options' onClick={()=>setActiveName('users')}>
              <span className='icon'><GroupIcon/></span>
              <span className='names users'>Users</span>
            </div>
          </DIV>
          <LeftPart>  
            <Nav>
              <div className='menu'>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={handleHamburger}
                >
                  <MenuIcon />
                </IconButton>
              </div>
  
              <div  style={{backgroundColor:'#EAEDF7'}}>  
                <StyledSearchBar
                  variant="outlined"
                  placeholder="Search..."
                  InputProps={{
                  startAdornment: (
                    <InputAdornment  position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}/>
              </div>
            </Nav>

         
           <Grid container>
            <Grid container spacing={1} sx={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
              <Grid item  xs={12} sm={6} md={4} lg={3} sx={{ justifySelf: 'center',margin:"5px" }}>
              <Card name="Total Users" icon={<GroupAddIcon/>} count={3000}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ justifySelf: 'center',margin:"5px" }}>
              <Card name="Active Users" icon={<GroupAddIcon/>} count={3000}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ justifySelf: 'center',margin:"5px"  }}>
              <Card name="Total Transactions" icon={<PaymentsIcon/>} count={'$3000'}/>
              </Grid>
            </Grid>

            <Grid>
              
            </Grid>
            <div className='transactionDiv'>

            </div>
            </Grid>
          </LeftPart>  
      </MAIN>
      <YourComponent/>
      <Footer/>
    </div>
  )
}

export default AdminDashboard


const MAIN = styled.div`
display: flex;
flex-direction: row;  
.menu{
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  color: green;
}


.icon{
 padding: 5px;
 margin-right: 10px;
 border: none;
}

.names{
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  padding-right: 60px;
}

.options{
  height: 80px;
  width: auto;
  border-top: 1px solid gray;
  border-bottom: 1px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: transform 0.3s ease-in-out; 
}

.names:hover {
    color: green;
    cursor: pointer;
  }

  .dashboard {
    color: ${(props) => (props.activeName === 'dashboard' ? 'green' : 'white')};
  }

  .users {
    color: ${(props) => (props.activeName === 'users' ? 'green' : 'white')};
  }

  .middlePart{
    display: grid;
  }
`

const DIV = styled.div`
width: fit-content;
height: 500px;
border: 1px solid gray;
color: white;
`

const Nav = styled.div`
border: 1px solid gray;
height: 50px;
color: white;
display: flex;
align-items: center;


.search{
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
`

const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .cardDIV{
    margin: 20px;
    display: grid;
    grid-auto-rows: 2;
    justify-content: center;
    gap: 5%;
  }

  .transactionDiv{
    width: 300px;
    max-height:100%;
    height: 300px;
    overflow: auto;
    border: 1px solid white;
  }
`

const StyledSearchBar = styled(TextField)` 
&& {
  width: 250px; /* Set your desired width */
}
.MuiInputBase-input {
  background-color: EAEDF7; /* Set your desired background color */
  border-radius: 8px; /* Set your desired border radius */
  padding: 10px; /* Adjust padding as needed */
  height: 15px;
}
.MuiSvgIcon-root {
  fill: #757575; /* Set your desired icon color */
}
.MuiOutlinedInput-root {
  &.Mui-focused {
    fieldset {
      border-color: green; /* Set your desired outline color when focused */
      border-radius:0px;
    }
  }
}
`;