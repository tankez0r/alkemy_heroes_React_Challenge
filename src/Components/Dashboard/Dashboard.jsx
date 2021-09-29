import React from "react";
import { Fragment } from "react";
import Heroes from "./Heroes";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="App-header">
      <Navbar />
      <Heroes />
    </div>
  );
};

export default Dashboard;
