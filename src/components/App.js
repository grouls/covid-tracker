import React, { Component } from "react";
import Footer from "./Footer";
import Chart from "./Chart";
import Graph from "./Graph";
import Header from "./Header";
import Loader from "./Loader";
import { fetchTotalData, fetchCountries } from "../api";
import { DropdownList } from "react-widgets";
import "../styles/styles.scss";
import "react-widgets/dist/css/react-widgets.css";

class App extends Component {
  state = {
    totalData: {},
    countries: [],
    country: ""
  };

  async componentDidMount() {
    const fetchedCountries = await fetchCountries();
    const fetchedTotalData = await fetchTotalData();
    this.setState({
      totalData: fetchedTotalData,
      countries: fetchedCountries
    });
  }

  onChange = async value => {
    const totalData = await fetchTotalData(value);
    this.setState({ totalData, country: value });
  };

  render() {
    const { totalData, countries, country } = this.state;
    return (
      <div className="app">
        <Header />
        {!totalData ? (
          <Loader />
        ) : (
          <>
            <DropdownList
              filter
              name="countryDropdown"
              data={countries}
              value={this.state.country}
              onChange={this.onChange}
              selectIcon={false}
              searchIcon={false}
              placeholder="Select a country"
              className="country-dropdown"
              label="test"
            />
            <Chart data={totalData} country={country} />
            <Graph data={totalData} country={country} />
          </>
        )}
        <Footer lastUpdate={totalData.lastUpdate} />
      </div>
    );
  }
}

export default App;
