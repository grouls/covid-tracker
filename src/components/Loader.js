import React from "react";
import { css } from "@emotion/core";
import { BeatLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loader = ({ size }) => (
  <div className="loader">
    <BeatLoader css={override} size={10} color="black" loading={true} />
  </div>
);

export default Loader;
