import React from "react";

const Footer = ({ lastUpdate }) => {
  let date = new Date(lastUpdate);
  return (
    <div className="footer">
      <p>
        Data sources from{" "}
        <a href="https://github.com/mathdroid/covid19">mathdriod</a>
      </p>
      <p>{`Last Updated: ${date}`}</p>
    </div>
  );
};

export default Footer;
