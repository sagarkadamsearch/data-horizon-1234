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
import Dashboard from './Dashboard';
import TransactionCard from './TransactionCard';


const DashboardMain = ({activeName}) => {



    return (
        <DIV style={{display:activeName=="dashboard"?"block":"none",}}>
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
            </Grid>

            <Grid container spacing={5} sx={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
              <Grid item  xs={12} sm={12} md={6} lg={6} sx={{ justifySelf: 'center',margin:"5px" }}>            
                <YourComponent/> 
              </Grid>
              <Grid item  xs={12} sm={12} md={6} lg={4} sx={{ justifySelf: 'center',marginRight:"0px",paddingRight:"0px" }}> 
                <div className='transactionDiv'>
                      <h3>Transactions</h3>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                    <TransactionCard/>
                </div>
              </Grid>
            </Grid>
        </DIV>
    );
};

export default DashboardMain;


const DIV = styled.div`


    
.transactionDiv{
    width: 300px;
   height: 385px;
    max-height:100%;
    overflow: auto;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  } 
`