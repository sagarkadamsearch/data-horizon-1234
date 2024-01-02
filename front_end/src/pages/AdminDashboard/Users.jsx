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

const Users = ({activeName}) => {
    return (
        <DIV style={{display:activeName=="users"?"block":"none",}}>
            <Grid container>
            <Grid container spacing={1} sx={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
              <Grid item  xs={12} sm={6} md={4} lg={3} sx={{ justifySelf: 'center',margin:"5px" }}>
              <Card name="Total Users" icon={<GroupAddIcon/>} count={3000}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ justifySelf: 'center',margin:"5px" }}>
              <Card name="Active Users" icon={<GroupAddIcon/>} count={3000}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ justifySelf: 'center',margin:"5px"  }}>
              <Card name="Deactive Users" icon={<PaymentsIcon/>} count={'200'}/>
              </Grid>
            </Grid>
            </Grid>
        </DIV>
    );
};

export default Users;


const DIV = styled.div`



`