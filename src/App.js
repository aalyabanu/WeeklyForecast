import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Scard from "./Scard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import CardGroup from "react-bootstrap/CardGroup";
import { ApiClient } from "./ApiClient";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "",
      weather: [],
    };
    this.apiClient = new ApiClient();
  }

  fetchWeatherData() {
    this.setState({
      loading: "...loading",
      fetching: true,
    });
    this.apiClient
      .getWeather()
      .then((response) => {
        this.updateWeather(response.data.daily);
      })
      .finally(() => {
        this.setState(
          {
            loading: "",
          },
          console.log(this.state.weather)
        );
      });
  }

  updateWeather(response) {
    this.setState({
      weather: response,
    });
  }

  buildCards() {
    return this.state.weather.slice(0, 7).map((current, i) => (
      <Col key={i} md={4} sm={6} xs={12}>
        <CardGroup>
          <Scard
            dateString={current.dt}
            img={current.weather[0].icon}
            alt={current.weather[0].description}
            text={current.weather[0].description}
            max={current.temp.max}
            min={current.temp.min}
            wind={current.wind_speed}
          />
        </CardGroup>
      </Col>
    ));
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar>
            <Navbar.Brand className="Brand" href="#home">
              Weekly Weather Forecast For Sheffield{this.state.loading}
            </Navbar.Brand>
          </Navbar>
          <Row style={{ marginBottom: "40px", marginTop: "20px" }}>
            {this.buildCards()}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
