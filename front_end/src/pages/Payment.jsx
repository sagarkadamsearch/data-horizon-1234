import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer/footer";
import Loading from "../components/Common/Loading/loading";
import { getCoinData } from "../functions/getCoinData";
import styled from "styled-components";
import { motion } from "framer-motion";
import { addToWatchlist, removeFromWatchlist } from "../functions";


const GridBox = styled(motion.div)`
  padding: 0 20px;
  border: 1px solid var(--blue);
  margin-bottom: 10px;
  display: flex;
  height: auto;
  margin: 5% auto;
  width: 80%;
  flex-direction: row;
  align-items: center;
  background-color: var(--darkgrey);
`;

function Payment() {

  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [delay, setDelay] = useState(1);
  const [paymentAmount, setPaymentAmount] = useState(0);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        if (id) {
          const coinData = await getCoinData(id);
          setCoin(coinData);
          console.log(coin);
        }
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };
  
    fetchCoinData();
  }, [id]);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <div>
      <Header/>
      {coin ? (
        <GridBox
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: delay }}
        className={`grid-box ${
          1 < 0 && "grid-box-red"
        }`}
      >
        <div className="info-flex">
          <div style={{display:"flex", alignItems:"center", gap:"25px"}}>
            <img style={{height:"100px", width:'100px'}} src={coin.image.large} className="coin-logo" />
            <p className="coin-symbol" style={{fontSize:"xx-large"}}>{coin.symbol}</p>
            <p className="coin-name" style={{fontSize:"xx-large"}}>{coin.name}</p>
            <p>$ {coin.market_data.current_price.inr}</p>
            <p style={{color: coin.market_data.price_change_24h_in_currency.inr < 0 ? "var(--red)" : "var(--green)",}}>$ {coin.market_data.price_change_24h_in_currency.inr}</p>
          </div>
          
          {/* <div>
            <p>{coin.description.en}</p>
          </div> */}
        </div>
        {/* Payment Section */}
        <div style={{display:"flex", flexDirection:"column", width:"40%"}}>
          <h3>Payment Details</h3>
          <input
            type="text"
            placeholder="Card Number"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Expiry Date"
            name="expiry"
            value={cardDetails.expiry}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="CVV"
            name="cvv"
            value={cardDetails.cvv}
            onChange={handleInputChange}
          />
          <button onClick={handlePayment}>Pay</button>
        </div>
        {/* Payment Success Message */}
        {paymentSuccess && <p>Payment Successful!</p>}
      </GridBox>
      ):<Loading/>}
      <Footer />
    </div>
  );
}

export default Payment;
