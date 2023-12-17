import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer/footer";
import Loading from "../components/Common/Loading/loading";
import { getCoinData } from "../functions/getCoinData";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import styled from "styled-components";
import { motion } from "framer-motion";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import IconButton from "@mui/material/IconButton";
import { addToWatchlist, removeFromWatchlist } from "../functions";


const GridBox = styled(motion.div)`
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
`;

const CoinLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const NameFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function Payment() {

  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [delay, setDelay] = useState(1);
  const [paymentAmount, setPaymentAmount] = useState(0);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coinData = await getCoinData(id);
        setCoin(coinData);
        console.log(coinData.image.large);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    if (id) {
      fetchCoinData();
    }
  }, [id]);

  const isWatchlist = localStorage.getItem("watchlist")
    ? localStorage.getItem("watchlist").includes(id)
    : false;
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToWatchlist = () => {
    setIsAdded(true);
    addToWatchlist(id);
  };

  const handleRemoveFromWatchlist = () => {
    setIsAdded(false);
    removeFromWatchlist(id);
  };


  return (
    <div>
      <Header />
      <GridBox
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: delay }}
        className={`grid-box ${
          1 < 0 && "grid-box-red"
        }`}
      >
        <div className="info-flex">
          {/* <a href={`/coin/${id}`}>
            <CoinLogo src={coin.image.large} className="coin-logo" />
          </a> */}
          <a href={`/coin/${id}`}>
            <NameFlex className="name-flex">
              <p className="coin-symbol">coin.symbol</p>
              <p className="coin-name">coin.name</p>
            </NameFlex>
          </a>
          {isWatchlist || isAdded ? (
            <div
              className="bookmark-icon-div"
              onClick={handleRemoveFromWatchlist}
            >
              <IconButton>
                <BookmarkRoundedIcon className="bookmark-icon" />
              </IconButton>
            </div>
          ) : (
            <div className="bookmark-icon-div" onClick={handleAddToWatchlist}>
              <IconButton>
                <BookmarkBorderRoundedIcon className="bookmark-icon" />{" "}
              </IconButton>
            </div>
          )}
        </div>
        {/* Rest of your component */}
      </GridBox>
      <Footer />
    </div>
  );
}

export default Payment;
