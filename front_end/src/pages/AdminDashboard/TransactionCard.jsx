import styled from '@emotion/styled';
import React from 'react';

const TransactionCard = () => {
    return (
        <DIV>
            <div>
                <span>Customer Name: </span>
                <span>Sagar Kadam</span>
            </div>
            <div>
                <span>Crypto Name: </span>
                <span>India</span>
            </div>
            <div>
                <span>Country: </span>
                <span>India</span>
            </div>
            <div>
                <span>Transaction value: </span>
                <span>$3000</span>
            </div>
            <div>
                <span>Transaction Date: </span>
                <span>12/10/23</span>
            </div>
        </DIV>
    );
};

export default TransactionCard;


const DIV = styled.div`
 width:90%;
 padding: 10px;
 /* border: 1px solid blue; */
 border-radius: 5px;
 background-color: rgba(0, 0, 0, 0.5);
 background-color: rgba(211, 211, 211, 0.5);
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
 margin-top: 10px;
box-sizing: border-box;
`