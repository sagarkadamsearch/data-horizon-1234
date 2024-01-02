import React, { useEffect, useState } from 'react'
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
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import {useSearchParams} from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';

const Users = ({activeName,users,setUsers,ActiveUserCount,DeaciveUserCount,TotalUsersCount}) => {

 let [searchParams, setSearchParams] = useSearchParams();
 const [active,setActive] = useState(false);
 const [deactive,setDeactive] = useState(false);
 const [ageGreaterThan18,setAgeG18] = useState(false);

 let [query, setQuery] = React.useState(
  searchParams.get("query")
);


 const filter = async () => {
    const url = `${process.env.REACT_APP_API_URL}/users`;
    const allParams = Object.fromEntries(searchParams.entries());
    let Query = {
      ...allParams,
      active: active,
      deactive: deactive,
      ageGreaterThan18: ageGreaterThan18
    }
    setSearchParams(Query);

    try {
      const response = await axios.get(url, {
        params: {
          ...Query
        },
      });
  
      setUsers(response.data);
       
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    filter();
  },[active,deactive,ageGreaterThan18]);

const SkeletonPreview = new Array(10).fill(0).map(()=>  
<tr>
  <td><Skeleton variant="rectangular" width={'100%'} height={20} /></td>
  <td><Skeleton variant="rectangular" width={'100%'} height={20} /></td>
  <td><Skeleton variant="rectangular" width={'100%'} height={20} /></td>
  <td><Skeleton variant="rectangular" width={'100%'} height={20} /></td>
  <td><Skeleton variant="rectangular" width={'100%'} height={20} /></td>
</tr>)

const usersTableData = users?.map((card)=>
 <tr key={card._id}>
   <td>{card.fname?card.fname:"Suraj"}</td>
   <td>{card.lname?card.lname:"Chavan"}</td>
   <td style={{color:card.status=="active"?"darkGreen":"red"}}>{card.status?card.status:"Not found"}</td>
   <td style={{color:'blue',textDecoration:'underline'}}>Edit</td>
   <td><button type="button" class={`btn ${card.status=="active"?'btn-danger':'btn-success'}`} style={{width:"100px"}}>{card.status=="active"?'Deactivate':'Activate'}</button></td>
 </tr>)

console.log(usersTableData,'usersData')
    return (
        <DIV  style={{display:activeName=="users"?"block":"none"}} >
            <Grid container>
            <Grid container spacing={1} sx={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
              <Grid item  xs={12} sm={6} md={4} lg={3} sx={{ justifySelf: 'center',margin:"5px" }}>
              <Card name="Total Users" icon={<GroupAddIcon/>} count={TotalUsersCount|| <CircularProgress/>}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ justifySelf: 'center',margin:"5px" }}>
              <Card name="Active Users" icon={<GroupAddIcon/>} count={ActiveUserCount || <CircularProgress/>}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} sx={{ justifySelf: 'center',margin:"5px"  }}>
              <Card name="Deactive Users" icon={<GroupAddIcon/>} count={DeaciveUserCount || <CircularProgress/>}/>
              </Grid>
            </Grid>
            </Grid>


            <div className='filter_table'>
              <div className='filter' style={{}}>
                <button className={active?'active':""} onClick={()=>setActive(!active)}  style={{backgroundColor:'#ffffff',borderRadius:'10px',padding:"25px",boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>Active</button>
                <button className={deactive?'active':""} onClick={()=>setDeactive(!deactive)} style={{backgroundColor:'#ffffff',borderRadius:'10px',padding:"25px",boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>Deactive</button>
                <button className={ageGreaterThan18?'active':""} onClick={()=>setAgeG18(false)} style={{backgroundColor:'#ffffff',borderRadius:'10px',padding:"25px",boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>age {'>'} 18</button>
              </div>
            

               <div className="table-responsive-sm tableDiv">
                <table className='table table-hover table-striped table-light'>
                    <thead className='thead-light' style={{backgroundColor:"blue"}}>
                        <tr>
                            <td scope="col">Name</td>
                            <td scope="col">Surname</td>
                            <td scope="col">Status</td>
                            <td scope="col">Update</td>
                            <td scope="col">Options</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length!=0?usersTableData:SkeletonPreview}
                    </tbody>
                </table>
               </div>
            </div>  
        </DIV>
    );
};

export default Users;


const DIV = styled.div`

.filter_table{
  display:flex;
  justify-content:center;
  gap:10px;
}

.filter{
  display:flex;
  flex-direction:column;
  gap:15px;
  margin-top:20px;
  margin-left:20px;
}

.tableDiv{
    width: 80%;
    margin: auto;
    margin-top: 20px;
}

thead tr{
    font-weight: bold;
    border-bottom: 1.5px solid gray;
}

tbody tr td{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


.filter button{
    background-color:#ffffff;
    border-radius:10px;
    padding:25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
  &:hover{
    transform: scale(1.05);
    background: linear-gradient(45deg, #4CAF50, #2196F3); /* Gradient color */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    opacity: 1;
  } 
} 


.filter button.active{
  transform: scale(1.05);
    background: linear-gradient(45deg, #4CAF50, #2196F3); /* Gradient color */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    opacity: 1;
}

@media all and (max-width:650px) {
  .filter_table{
     display:flex;
     flex-direction: column;
     justify-content:center;
     align-items: center;
     gap:10px;
   
     .filter{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
     }

     button{
      width: 150px;
     }
   }
}  

`