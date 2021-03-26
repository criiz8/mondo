import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobeAmericas,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.flex}>
      <footer className={style.bd_grid + " " + style.test}>
        <div>
          <a href="/countries/1" className={style.icons}>
            <FontAwesomeIcon icon={faGlobeAmericas} className={style.icons} />
          </a>
        </div>
        <div className={style.text}>
          2021 <FontAwesomeIcon icon={faCopyright} className={style.copy} />
          Mondo
        </div>
        <div>
          <a className={style.ig} href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} className={style.icons} />
          </a>
          <a className={style.icons} href="https://www.twitter.com/">
            <FontAwesomeIcon icon={faTwitter} className={style.icons} />
          </a>
        </div>
      </footer>{" "}
    </div>
  );
};

export default Footer;
