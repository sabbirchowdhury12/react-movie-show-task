import React, { useEffect, useState } from "react";
import ShowSingleCard from "./ShowSingleCard";
import "../../../utils/Custom.css";
import Loading from "../../../Components/Loading";

const ShowSection = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  if (!shows.length) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="cards">
        <div className="cards-text">
          <h2>Chose Your Favourite Show</h2>
          <p>Most watched movies by days</p>
        </div>
        {shows.map((show) => (
          <ShowSingleCard show={show} key={show.show.id} />
        ))}
      </div>
    </div>
  );
};

export default ShowSection;
