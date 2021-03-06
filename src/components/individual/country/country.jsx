import React from "react";
import style from "./country.module.css";

const Country = ({ country, activities }) => {
  return (
    <div className={style.data + " " + style.bd_grid}>
      <div className={style.img}>
        <img src={country.flag} />
      </div>
      <div>
        <ul>
          <li>
            <h2 className={style.title}>{country.name}</h2>
          </li>
          <li>
            <h4>ID: {country.alpha3code}</h4>
          </li>
          <li>
            <h4>Region: {country.region ? country.region : "-"}</h4>
          </li>
          <li>
            <h4>SubRegion: {country.subregion ? country.subregion : "-"}</h4>
          </li>
          <li>
            <h4>Capital: {country.capital ? country.capital : "-"}</h4>
          </li>
          <li>
            <h4>
              Area:{" "}
              {country.area
                ? country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : country.area}
            </h4>
          </li>
          <li>
            <h4>
              Population:{" "}
              {country.population
                ? country.population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : country.population}
            </h4>
          </li>
        </ul>
      </div>
      <div className={style.activities}>
        <ul>
          <li>
            <h2 className={style.title}>
              {activities.length > 1 ? "Activities" : "Activity"}
            </h2>
          </li>
          <li>
            {activities.length > 0
              ? activities.map((activity) => {
                  return (
                    <h4>
                      {activity.title}: It has a difficulty of{" "}
                      {activity.difficulty} stars, lasts for {activity.duration}{" "}
                      minutes and it's in the {activity.season}
                    </h4>
                  );
                })
              : "This country doesn't have any activity."}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
