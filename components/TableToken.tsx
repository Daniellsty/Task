"use client";

import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModalToken from "./ModalTokenInfos";




const TableToken: React.FC<any> = ({ tableData }) => {

  const [token, setToken] = useState("");
  const [open, setOpen] = useState<boolean>(false);

 


  const handleOpen = (value:string) => {
 
    setToken(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <TableContainer
      sx={{ maxWidth: "800px", maxHeight: "400px", overflow: "auto" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Buy</TableCell>
            <TableCell align="right">Sell&nbsp;</TableCell>
            <TableCell align="right">ChangeRate&nbsp;</TableCell>
            <TableCell align="right">Low&nbsp;</TableCell>
            <TableCell align="right">High&nbsp;</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row: any) => (
            <TableRow
              key={row.symbol}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ cursor: "pointer" }}
                onClick={()=> handleOpen(row.symbol)}
                component="th"
              >
                {row.symbol}
              </TableCell>

              <TableCell component="th" align="right">
                {row.buy}
              </TableCell>
              <TableCell component="th" align="right">
                {row.sell}
              </TableCell>
              <TableCell component="th" align="right">
                {row.changeRate}
              </TableCell>
              <TableCell component="th" align="right">
                {row.low}
              </TableCell>
              <TableCell component="th" align="right">
                {row.high}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

     
      <ModalToken
      tokenAsset={tableData}
      selectedToken={token}
      open={open} 
      handleClose={handleClose} />


    </TableContainer>
  );
};

export default TableToken;
