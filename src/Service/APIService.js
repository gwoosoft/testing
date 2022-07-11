import axios from "axios";

const BeersRestApi = "https://7h4i2kxk5b.execute-api.us-west-2.amazonaws.com/";

export const inputdata = {
  name: "Sway Stout2 🍺",
  beerCompanyName: "Sway",
  beerTypeName: "Choco stout2"
};

const data = inputdata;

const config = {
  method: "post",
  url: BeersRestApi,
  headers: {
    "x-amz-target":
      "com.amazon.awsswaybackendservices.AWSSwayBackendServices.GetAllBeers",
    // "Accept-Charset": "utf-8",
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Content-Encoding": "amz-1.0"
  },
  data: data
};

const postconfig = {
  method: "post",
  url: BeersRestApi,
  headers: {
    "x-amz-target":
      "com.amazon.awsswaybackendservices.AWSSwayBackendServices.CreateBeer",
    // "Accept-Charset": "utf-8",
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Content-Encoding": "amz-1.0"
  },
  data: data
};

class APIService {
  async getBeers() {
    try {
      const response = await axios(config);
      console.log(JSON.stringify(response.data));
      const obj = JSON.stringify(response.data);
      return obj;
    } catch (error) {
      console.log(error);
    }
  }

  async postBeers() {
    try {
      const response = await axios(BeersRestApi, postconfig);
      // console.log(JSON.stringify(response));
      const obj = JSON.stringify(response);
      // console.log(JSON(response.data.beerId));
      return obj;
    } catch (error) {
      console.log("the post request is failed!");
      console.log(error);
    }
  }
}

export default new APIService();
