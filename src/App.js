/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import "./App.css";
import { Button, Card, Input } from "antd";
import cloud from "./Images/cloud-removebg-preview.png";
import { SearchOutlined } from "@ant-design/icons";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchData = () => {
    const key = "405f4f02568ced4fc5818c744d7cde69";
    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      ).then((response) => {
        response.json().then((result) => {
          setData(result);
          console.log("result", result);
        });
      });
    } catch (err) {
      console.log(err);
    }
    if (city === "") {
      alert("Please Enter The City");
    }
  };

  return (
    <div>
      <div className="card-flex">
        <Card hoverable className="card">
          <Input
            placeholder="Enter City"
            className="input"
            onChange={(e) => setCity(e.target.value)}
          />
          <Button onClick={fetchData}>
            <SearchOutlined />
          </Button>
          <div className="cloud">
            <img src={cloud} alt="cloud" height={130} width={130} />
          </div>
          <div>
            <div>
              <h3>City = {data?.name}</h3>
              <h3>Country = {data?.sys?.country}</h3>
              <h3>
                Temperature = {Math.round(data?.main?.temp)}
                °C
              </h3>
              <h3>Lat = {data?.coord?.lat}</h3>
              <h3>Lon = {data?.coord?.lon}</h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
