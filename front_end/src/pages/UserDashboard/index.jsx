import React, { useState } from 'react'
import Header from '../../components/Common/Header/index'
import Footer from '../../components/Common/Footer/footer'
import styled from 'styled-components';
// import { Line } from "react-chartjs-2";
import {Line} from "react-chartjs-2"
// import { Chart as ChartJS } from "chart.js/auto";
import {Chart as ChartJS} from "chart.js/auto"

const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];
const Lesson = ({ id, name, category, amount, change }) => (
  <div className="stock" key={id} style={{margin: '15px', padding: '15px' }}>
    <div className='first'>
      <div className='alpha'>
        <h1>{name[0]}</h1>
      </div>
      <div className='two'>
        <div>
          <p className='name'>{name}</p>
        </div>
        <div>
          <p>{category}</p>
        </div>
      </div>
    </div>
    <div className='second'>
      <div className='name'>{amount}</div>
      <div className='green'>{change}</div>
    </div>
  </div>
);

function UserDashboard() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "#2a71d0",
        borderWidth: 2,
      },
    ],
  });
  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white', // Set the color of x-axis labels to white
        },
        grid: {
          color: (context) => context.tick.value === 0 ? 'white' : 'rgba(17, 17, 17, 0.2)', // Set the color of x-axis grid lines to white for the zero line only
          borderDash: [5, 5], // Optional: Set a dashed pattern for the grid lines
        },
      },
      y: {
        ticks: {
          color: 'white', // Set the color of y-axis labels to white
        },
        grid: {
          color: (context) => context.tick.value === 0 ? 'white' : 'rgba(23, 23, 23, 0.2)', // Set the color of x-axis grid lines to white for the zero line only
          borderDash: [5, 5], // Optional: Set a dashed pattern for the grid lines
        },
      },
    },
  };

  const lessonsData = [
    { id: 'A', name: 'Amazon', category: 'Alpha', amount: '$3580.29', change: '+40.1(2.44%)' },
    { id: 'G', name: 'Alphabet', category: 'Alpha', amount: '$2865', change: '+80.11(9.10%)' },
    { id: 'E', name: 'eBay', category: 'Micak Doe', amount: '$59.29', change: '+66.11(6.54%)' },
    { id: 'M', name: 'Meta', category: 'Micak Doe', amount: '257.09', change: '+50(7.54%)' },
  ];

  return (
    <div>
      <Header/>
      <div style={{backgroundColor:"#383939"}}>
        <USER style={{height:"60vh", color:"white", textAlign:"center", paddingTop:"50px"}}>
         <h1> User Dashboard</h1>
            <div className='top'>
              <div className='outer'>
                <div className='inner'>
                  <div className='port'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/fingerprint.png?alt=media&token=a3f7d811-3a90-4183-9136-b657c3b12cfd" alt="" />
                    <p>Portfolio</p>
                  </div>
                  <div className='dollar'>
                    <h3>$258,789</h3>
                  <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/icons8-line-graph-24.png?alt=media&token=f9e17434-2cf8-4f49-818b-5ea95dac419a" alt="" />
                  </div>
                </div>
                <div className='graph'>
                  {/* <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/icons8-line-graph-24.png?alt=media&token=f9e17434-2cf8-4f49-818b-5ea95dac419a" alt="" /> */}
                </div>
              </div>
              <div className='outer'>
                <div className='inner'>
                  <div className='port'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/fingerprint.png?alt=media&token=a3f7d811-3a90-4183-9136-b657c3b12cfd" alt="" />
                    <p>Sales Profit</p>
                  </div>
                  <div className='dollar'>
                    <h3>$159,348</h3>
                  <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/icons8-line-graph-24.png?alt=media&token=f9e17434-2cf8-4f49-818b-5ea95dac419a" alt="" />
                  </div>
                </div>
                <div className='graph'>
                  {/* <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/icons8-line-graph-24.png?alt=media&token=f9e17434-2cf8-4f49-818b-5ea95dac419a" alt="" /> */}
                </div>
              </div>
              <div className='outer'>
                <div className='inner'>
                  <div className='port'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/fingerprint.png?alt=media&token=a3f7d811-3a90-4183-9136-b657c3b12cfd" alt="" />
                    <p>Account Balance</p>
                  </div>
                  <div className='dollar'>
                    <h3>$2089</h3>
                  <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-67d8f.appspot.com/o/icons8-line-graph-24.png?alt=media&token=f9e17434-2cf8-4f49-818b-5ea95dac419a" alt="" />
                  </div>
                </div>
                <div className='graph'>
                </div>
              </div>
            </div>
            <div className='bottom'>
              <div className='chart'>
                  <Line data={userData} options={options} />
              </div>
              <div className='subscriptions'>
                <h2>Stocks</h2>
                {lessonsData.map((lesson) => (
                  <Lesson key={lesson.id} {...lesson} />
                ))}
              </div>
            </div>
        </USER>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default UserDashboard;

const USER = styled.div`
width: 80%;
margin: auto;
.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  /* height: 100vw; */
}
.bottom  .chart {
  width: 62%;
  padding: 30px;
  background-color: #232222;
  border-radius: 10px;
  box-shadow: rgba(96, 95, 95, 0.25) 0px 54px 55px, rgba(74, 74, 74, 0.12) 0px -12px 30px, rgba(75, 75, 75, 0.12) 0px 4px 6px, rgba(81, 80, 80, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.chart:hover {
  background-color: #0d0d0d;
  transition: background-color 1s ease;
  
}
.bottom .subscriptions {
  background-color: #232222;
  width: 32%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;}
  .port img{
    width:40px;
    height: 40px;
  }
  .port p {
    font-size: 25px;
  }
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
  }
  .inner {
    margin-bottom: 0px;
  }
  .port {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
  .dollar {
    display: flex;
    gap: 10px;
  }
  .outer {
    width: 80%;
    /* margin: 15px; */
    margin-right: 2%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 25px;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: rgba(96, 95, 95, 0.25) 0px 54px 55px, rgba(74, 74, 74, 0.12) 0px -12px 30px, rgba(75, 75, 75, 0.12) 0px 4px 6px, rgba(38, 38, 38, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;    padding:10px 50px;
    background-color: #232222;
  }
  .outer:last-child {
  margin-right: 0; /* Remove the margin on the last element to prevent extra gap */
}
.outer:hover {
    background-color: #0d0d0d;
    transition: background-color 0.5s ease;

  }
  .graph img {
    width: 55;
  }
  .stock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    background-color: #171616;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;  }
  .stock:hover {
    background-color: #0d0d0d;
    transition: background-color 0.5s ease;

  }
  .first {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }
  .alpha {
    background-color: #165ca2;
    border-radius: 5px;
    width: 45px;
    padding: 0px 10px;
  }
  .two {
    display: flex;
    flex-direction: column;
    padding: 0px 7px;
  }
  .name {
    font-size: 20px;
    color: #165ca2;
    margin: 0px;
    padding: 0px;
  }
`
