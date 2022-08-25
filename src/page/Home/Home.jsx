import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./home.scss";
import URL from "../../apis/BaseUrl";
import API from "../../apis/ApiCalls";

const Home = ({ type }) => {
  const [lists, setlists] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const getRandonLists = async () => {
      try {
        const response = await axios.get(
          URL +
            API.lists +
            `${type ? "?type=" + type : ""}&${genre ? "genre=" + genre : ""}`
        );

        console.log(response);
        // setlists(res.data)
      } catch (error) {}
    };
    getRandonLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />

      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
