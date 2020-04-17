import React from "react";
import Loader from "./Loader";
import { formatDate } from "../utils";

const Footer = ({ lastUpdate }) => {
  return (
    <div className="footer">
      <p>
        Data sources from{" "}
        <a href="https://github.com/mathdroid/covid19">mathdriod</a>
      </p>
      {!lastUpdate ? (
        <Loader />
      ) : (
        <p>{`Last Updated: ${formatDate(lastUpdate)}`}</p>
      )}
    </div>
  );
};

export default Footer;
