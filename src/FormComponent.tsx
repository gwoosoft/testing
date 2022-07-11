/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import React, { useState } from "react";
import { inputdata } from "./Service/APIService";

export default function Formcomp() {
  const [data, setData] = useState({
    name: "",
    beerCompanyName: "",
    beerTypeName: ""
  });

  const [postdata, setPostData] = useState({
    name: "",
    beerCompanyName: "",
    beerTypeName: ""
  });

  function handlechange(event) {
    const { value, name } = event.target;
    console.log(name);
    setData((prevVal) => {
      if (name === "name") {
        return {
          name: value,
          beerCompanyName: prevVal.beerCompanyName,
          beerTypeName: prevVal.beerTypeName
        };
      } else if (name === "beerCompanyName") {
        return {
          name: prevVal.name,
          beerCompanyName: value,
          beerTypeName: prevVal.beerTypeName
        };
      } else if (name === "beerTypeName") {
        return {
          name: prevVal.name,
          beerCompanyName: prevVal.beerCompanyName,
          beerTypeName: value
        };
      }
    });
  }

  function handlesubmit(event) {
    alert(`the submission sucessful!`);
    setPostData(data);
    // console.log(postdata);
    inputdata.name = postdata.name;
    inputdata.beerCompanyName = postdata.beerCompanyName;
    inputdata.beerTypeName = postdata.beerTypeName;
    console.log(inputdata);
    event.preventDefault();
  }

  return (
    <div className="formcontainer">
      <form onSubmit={handlesubmit}>
        <input
          onChange={handlechange}
          name="name"
          placeholder="type beername"
          value={data.name}
        />
        <input
          name="beerCompanyName"
          onChange={handlechange}
          placeholder="type beercompany name"
          value={data.beerCompanyName}
        />
        <input
          name="beerTypeName"
          onChange={handlechange}
          placeholder="type beertype name"
          value={data.beerTypeName}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
