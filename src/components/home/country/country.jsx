import React from "react";
import style from "./country.module.css";

const Country = ({ country }) => {
  return (
    <div className={style.margins}>
      <a
        href={
          "/country/" +
          (country.alpha3code
            ? country.alpha3code.toLowerCase()
            : country.alpha3code)
        }
      >
        <div className={style.card}>
          <img src={country.flag} className={style.card_img} />
          <ul className={style.card_items}>
            <li>
              <h3>{country.name}</h3>
            </li>
            <li>
              <h5>Region: {country.region ? country.region : "-"}</h5>
            </li>
            <li>
              <h5>Capital: {country.capital ? country.capital : "-"}</h5>
            </li>
            <li>
              <h5>
                Population:{" "}
                {country.population
                  ? country.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : country.population}
              </h5>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default Country;
