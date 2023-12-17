import styled from '@emotion/styled';
import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Card = ({name,icon,icon1,count}) => {
    return (
        <DIV>
            <div className='cardName'>
                {icon}
              <span>{name}</span>
            </div>
            <div className='flow'>
              <span className='count'>{count}{icon1}</span>
              <TrendingUpIcon className='arrow'/>
            </div>  
        </DIV>
    );
};

export default Card;


const DIV = styled.div`
  height: 100px;
  width: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: auto;
  padding-right: auto;
  border: 1px solid white;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
  border-radius: 5px;

  .cardName{
    /* position: absolute;
    top: 20px;
    left: 5%; */
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
  }

  .flow{
   display: flex;
   gap: 10px;
   align-items: center;
   box-sizing:border-box;
  }

  .arrow{
    color: green;
  }

  .count{
    font-weight: bold;
    font-size: large;
  }
`