import React from 'react';
import './App.css';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Beers from "./Beers";
import NewBeer from "./NewBeer";
import RandomBeer from "./RandomBeer";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from "react";


function App(props) {

  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response =>
      setBeerData({ ...response.data })
    ).catch((err) => console.log(err))

  }, []);

  console.log(beerData);

  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/newbeer" element={<NewBeer />} />
      <Route path="/randombeer" element={<RandomBeer />} />
    </Routes>
  );
}

export default App;
