/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useState, useEffect } from "react";
import APIService from "./Service/APIService";

export default function BeerComponent() {
  const [beers, setBeers] = useState([]);

  function onbuttonclick() {
    APIService.getBeers()
      .then((data) => {
        const obj = JSON.parse(data);
        console.log("data we received:");
        console.log(obj);
        console.log("you just hit the beer button!");
        setBeers(obj.beers);
        console.log(beers);
      })
      .catch(function (ex) {
        console.log(ex);
        console.log("Response parsing failed. Error: ", ex);
      });
  }

  function onbuttonsend() {
    APIService.postBeers()
      .then((data) => {
        const obj = JSON.parse(data);
        console.log("post response we received:");
        console.log(obj);
        console.log("you just hit the beer send button!");
        alert(`your request has been submitted!!`);
        console.log(beers);
      })
      .catch(function (ex) {
        console.log(ex);
        console.log("Response parsing failed. Error: ", ex);
      });
  }

  return (
    <div>
      <button onClick={onbuttonclick}>Beer Button</button>
      <button onClick={onbuttonsend}>Beer send Button</button>
      <h2 className="text-center">Beer Details</h2>
      <table>
        <caption>Beer IPA Tables</caption>
        <thead>
          <tr>
            <th>Beer Company Name</th>
            <th>Beer Type</th>
            <th>Beer Name</th>
            <th>Beer ID</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((product) => (
            <tr key={product.beerId}>
              <td>{product.beerCompanyName}</td>
              <td>{product.beerTypeName}</td>
              <td>{product.name}</td>
              <td>{product.beerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
