import React from "react";
import { Pie } from "react-chartjs-2";

const Graph = ({ data: { confirmed, recovered, deaths }, country = "" }) => {
  return confirmed ? (
    <div className="graph">
      <Pie
        data={{
          labels: ["confirmed", "recovered", "deaths"],
          datasets: [
            {
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)"
              ],
              data: [confirmed.value, recovered.value, deaths.value]
            }
          ]
        }}
      />
    </div>
  ) : null;
};

export default Graph;
