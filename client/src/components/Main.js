import React from "react";
import { Link } from "react-router-dom";
import '../styles/Main.css';

export default function Main() {
    return (
        <div className="main">
        <div className="main_section">
            <h2> Currency Exchange Rates by </h2>
            <h1> Exchange<span>Rate</span></h1>
            <p> Get the latest currency exchange rates from the <span>Nothern Trust Bank</span> </p>
            <Link  className="btn" to={'/exchange'}>Get ExchangeRates</Link>
        </div>
        </div>
    );
    }