import React from "react";
import { formatDate } from "../utils";

const Footer = ({ lastUpdate }) => {
  return (
    <div className="footer">
      <p>
        Data sources from{" "}
        <a href="https://github.com/mathdroid/covid19">mathdriod</a>
      </p>
      <p>{`Last Updated: ${formatDate(lastUpdate)}`}</p>
    </div>
  );
};

export default Footer;
