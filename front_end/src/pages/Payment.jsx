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
          //console.log(coin);
        }
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };
  
    fetchCoinData();
  }, [id]);

  const [cardDetails, setCardDetails] = useState({
    name: "",
    add: "",
    number: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

    // let newTran = {
    //   image: coin.image.large,
    //   symbol: coin.symbol,
    //   coinName: coin.name,
    //   price: coin.market_data.current_price.inr
    // }
      const [rzpLoaded, setRzpLoaded] = useState(false);

      useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => setRzpLoaded(true);
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      const handlePayment = async () => {
        const options = {
          key: 'rzp_test_4htdHbChldhy8V',
          amount: coin.market_data.current_price.inr * 100, // Amount in paise or smallest currency unit
          currency: 'INR',
          name: 'Invest Master',
          description: 'Payment for Crypto',
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADgUlEQVR4AWIYVGAUjAIeAG9lEeU0FIXhCg61yBju0LyM4S473J02xVJ5Ndyp4bLBd9gSd8bWuOsKd3cbvUmbcWmD5Jz/xN//XUuSnR3jkl18fKqbj09x8RSLu9VLwbLXywxwdKbPxGX5pvKi/CY+J8h1qRqAcfAk4yykkLOQBhEI39Cx9vZyzDOC0+qA+QpQHqhQUIbP9ORMwNKrypc0jJ0nAECECKtAj/BefbJdE5N5aJoiw8+NAtMPovmKqYK+AYDtWGimqmoA5IgASBBY2P/Qs9hZn7GrogU4E+DagvGNiLGgAjDfneE3N6jmNSkDOGIeBqBhTyDng0Ys7hJV9AFLAzDfmembWlAMADBn/Fz7hJGbFCBVtQAGMCUiALQAEIEwIJwF/RBfnfnpkEUJUXJg+E1KPUT++YzfPDknxCmILnPbxvVY2KtGALKUOVWyz4NSrNUje53K3lWKXW9mIfJ7peqen+EzbzkZmF6PSPM2MKS6d9KdvbOiBAAhURIQ7PEHDcKjdAyuOHJBiz7Tbz4kmJeK/hykvknzrnOVZIqHI1nnt6TOHj5qgDjk/JWQ5rlMwDSQJaW4oWFx+zKpD05Xg/lCMP4lmcP+JZgPPrDKqSBSPSyJnPdAhU1iAADhbwZknwkv3i3VmDCazr36VCyOpkqpVECNBwqGpaL/DdEHYRrUiV3mUHSK+7g4XQDQGABiacJveqO1L4EwR8Jxqd74FpfmHCN2vZ+LB9OccqnPgOiphC5z1ESKexFM0W9C6CMAiLoElCgHAPB9GjG4ASywU4heAIhHjiuJ6Y5WWUFLbTBdXv5rd9rPiZ2uY529Dcj5UjCPGkB8uBSAriPfR7inR7gtANwAgDcJqY6hsybOUELdh0LXv4Gow+YrTD8AwHkiOF0lrtfRFsmoGJQcAFwM0CjdqdAzjhEk61iSkGqvfdpvTgTz42D+UBKY74OR00nraY3FJY0ewFABwNpHul8/2VVLk+qqE669qS6YNoXImwuC4+YAoBXuVQVAC03YyRtjBowAIHOTAMjSAJ298jMQ66YxOko39f8H0DF2eQBkKQBtB14+gNH+5xnQtv9zAHG9aJpQy8Bnt+QPCHJ8MRitveQD2KT1RMUhnN+ss8dS5QsGo60VBRAUsvOw52nGPjkp2aaXC0Aw1lYUCq9HIwcfz2JL0eSNciQYBhMYBaMAAN36XLbOlYsTAAAAAElFTkSuQmCC',
          handler: function (response) {
            console.log(response);
            setPaymentSuccess(true);
          },
          prefill: {
            name: 'Customer Name',
            email: 'customer@example.com',
          },
          notes: {
            address: 'Customer Address',
          },
          theme: {
            color:  "var(--blue)",
          },
        };
        if (rzpLoaded) {
          const rzp = new window.Razorpay(options);
          rzp.open();
        } else {
          console.error('Razerpay SDK not loaded');
        }
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
            {/* <p style={{color: coin.market_data.price_change_24h_in_currency.inr < 0 ? "var(--red)" : "var(--green)",}}>$ {coin.market_data.price_change_24h_in_currency.inr}</p> */}
          </div>
        </div>
        
        {/* Payment Success Message */}
        {!paymentSuccess ? (
          <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <h3>Payment Details</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={cardDetails.name}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <input
            type="text"
            placeholder="Address"
            name="add"
            value={cardDetails.add}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <input
            type="number"
            placeholder="Number"
            name="number"
            value={cardDetails.number}
            onChange={handleInputChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <button
            onClick={handlePayment}
            style={{ padding: "8px 16px", border:"none", borderRadius:"5px", marginBottom: "10px", backgroundColor:"var(--blue)" }}
          >
            Pay
          </button>
        </div>
        ) : (
          <p style={{ marginTop: "10px", color: "green" }}>
            Payment Successful!
          </p>
        )}

      </GridBox>
      ):<Loading/>}
      <Footer />
    </div>
  );
}

export default Payment;
