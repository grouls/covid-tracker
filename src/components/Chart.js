import React from "react";
import CountUp from "react-countup";
import { roundUp, createData } from "../utils";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const Chart = ({ data: { confirmed, recovered, deaths }, country = "" }) => {
  if (!confirmed) {
    return "Loading....";
  }
  const recoveredPercent = roundUp(recovered.value, confirmed.value);
  const deathPercent = roundUp(deaths.value, confirmed.value);
  const rows = [
    createData("confirm", confirmed.value),
    createData("deaths", deaths.value, deathPercent),
    createData("recovered", recovered.value, recoveredPercent)
  ];

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="title">
              {country ? country : "worldwide"}
            </TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right" title="Estimated Percentage of Confirmed">
              Percent&nbsp;(%)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow>
              <TableCell className="title" component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                <CountUp
                  start={0}
                  end={row.total}
                  duration={1.5}
                  separtor=","
                />
              </TableCell>
              <TableCell align="right">
                {row.title !== "confirmed" && row.percent ? (
                  <CountUp
                    start={0}
                    end={row.percent}
                    duration={1.5}
                    separtor=","
                  />
                ) : (
                  "n/a"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Chart;
