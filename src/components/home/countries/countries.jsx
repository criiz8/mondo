import React from "react";
import style from "./countries.module.css";
import Country from "../country/country";

const location = window.location.href.split("/");
class Countries extends React.Component {
  state = {
    loading: "loading",
    countries: "",
    countriesAmount: 25,
  };

  async componentDidMount() {
    let url = `https://restcountries.eu/rest/v2/all`;
    if (location[4] === "search") {
      url = `https://restcountries.eu/rest/v2/all`;
    } else if (location[5] === "popup" || location[5] === "popdown") {
      url = `https://restcountries.eu/rest/v2/all`;
    } else if (location[5]) {
      url = `https://restcountries.eu/rest/v2/all`;
    }
    const response = await fetch(url);
    let data = await response.json();
    if (location[5] === "popup") {
      data.sort((a, b) => (a.population > b.population ? 1 : -1));
    } else if (location[5] === "popdown") {
      data.sort((a, b) => (a.population < b.population ? 1 : -1));
    }
    this.setState({ countries: data });
    this.setState({ loading: "" });
  }
  renderProduct = (country) => {
    if (location[5] === "popup" || location[5] === "popdown") {
      <Country country={country} key={country.alpha3code} />;
    }
    return <Country country={country} key={country.alpha3code} />;
  };

  render() {
    return (
      <div className={style.cards}>
        {this.state.loading ? (
          <h1 className={style.loading}>{this.state.loading}</h1>
        ) : this.state.countries.length > 0 ? (
          location[5] === "popup" || location[5] === "popdown" ? (
            this.state.countries
              .slice(location[6] * 25 - 25, location[6] * 25)
              .map((country) => {
                return this.renderProduct(country);
              })
          ) : (
            this.state.countries.map((country) => {
              return this.renderProduct(country);
            })
          )
        ) : (
          `There's no activities in the ${location[5]}.`
        )}
      </div>
    );
  }
}

export default Countries;
