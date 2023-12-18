import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button/Button";
import Footer from "../components/Common/Footer/footer";
import Header from "../components/Common/Header";
import TopButton from "../components/Common/TopButton/topButton";
import Tabs from "../components/Dashboard/Tabs/tabs";
import { get100Coins } from "../functions/get100Coins";

function WatchListPage() {
  const watchlist = localStorage.getItem("watchlist")
    ? localStorage.getItem("watchlist").split(",")
    : [];

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    console.log("watchlist was changed");
  }, [watchlist]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await get100Coins();
      if (response) {
        const myCoins = response.filter((coin) => watchlist.includes(coin.id));
        setCoins(myCoins);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <Header />
      <div>
        {coins.length > 0 ? (
          <Tabs data={coins} />
        ) : (
          <div>
            <h1 style={{ textAlign: "center" }}>
              Your watchlist is Currently Empty
            </h1>
            <p style={{ textAlign: "center", color: "var(--grey)" }}>
              Please Add Coins in your watchlist
            </p>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href="/dashboard">
                <Button text="Dashboard" />
              </a>
            </div>
          </div>
        )}
      </div>
      <TopButton />
      <Footer />
    </div>
  );
}

export default WatchListPage;
