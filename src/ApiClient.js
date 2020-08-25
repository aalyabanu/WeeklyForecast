import axios from "axios";

export class ApiClient {
  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  getWeather() {
    return this.getRequest(
      "https:api.openweathermap.org/data/2.5/onecall?lat=53.383&lon=-1.466&exclude=hourly,minutely&units=metric&appid=75cc45c68f66808800a386f3a55995eb"
    );
  }

  getRequest(url) {
    return axios
      .get(url)
      .then(this.status)
      .catch(function (error) {
        console.error(error);
        alert(error);
      });
  }
}
