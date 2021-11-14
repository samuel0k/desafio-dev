import React from 'react';
import { Link } from 'react-router-dom';

import "./css/dash.css"

const Dashboard = () =>{
  return (
    <div>
      <header>
        <div id="logo">
          <div>
            <h1>CNAB</h1>
            <h2>files</h2>
          </div>
        </div>
        <ul id="route-btns">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        </ul>
      </header>
    </div>
  )
}

export default Dashboard