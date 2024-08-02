import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import { Paper } from "@mui/material";

interface ModalTokenProps {
  tokenAsset: any;
  open: boolean;
  handleClose: (event: boolean) => void;
  selectedToken: string;
}

const style = {
  position: "absolute",
  display: "block",
  overflowX: "auto",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "300px",
  minWidth: "80%",
  minHeight: "105px",
  backgroundColor: "background.paper",
  border: "0",
  paddingY: "5px",
  marginX: "5px",
  boxShadow: 24,
};

const ModalTokenInfos = ({
  tokenAsset,
  selectedToken,
  open,
  handleClose,
}: ModalTokenProps) => {
  const tokenInfo = tokenAsset.filter((token: any) => {
    return token.symbol == selectedToken;
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <TableContainer component={Paper}>
        <Table key={selectedToken} sx={style} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell align="right">Buy</TableCell>
              <TableCell align="right">Sell&nbsp;</TableCell>
              <TableCell align="right">ChangeRate&nbsp;</TableCell>
              <TableCell align="right">Low&nbsp;</TableCell>
              <TableCell align="right">High&nbsp;</TableCell>
              <TableCell align="right">ChangePrice&nbsp;</TableCell>
              <TableCell align="right">Last&nbsp;</TableCell>
              <TableCell align="right">MakerCoefficient&nbsp;</TableCell>
              <TableCell align="right">MakerFeeRate&nbsp;</TableCell>
              <TableCell align="right">TakerCoefficient&nbsp;</TableCell>
              <TableCell align="right">TakerFeeRate&nbsp;</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tokenInfo.map((token: any) => {
              return (
                <TableRow
                  key={token.symbol}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">{token.symbol}</TableCell>

                  <TableCell component="th" align="right">
                    {token.buy}
                  </TableCell>
                  <TableCell component="th" align="right">
                    {token.sell}
                  </TableCell>
                  <TableCell component="th" align="right">
                    {token.changeRate}
                  </TableCell>
                  <TableCell component="th" align="right">
                    {token.low}
                  </TableCell>
                  <TableCell component="th" align="right">
                    {token.high}
                  </TableCell>
                  <TableCell component="th" align="right">
                    {token.changePrice}
                  </TableCell>
                  <TableCell component="th" align="right">
                    {token.last}
                  </TableCell>
                  <TableCell component="th" align="right">
                    {token.makerCoefficient}
                  </TableCell>
                  <TableCell component="th" align="right">
                    {token.makerFeeRate}
                  </TableCell>
                  <TableCell component="th" align="right">
                    {token.takerCoefficient}
                  </TableCell>
                  <TableCell component="th" align="right">
                    {token.takerFeeRate}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Modal>
  );
};

export default ModalTokenInfos;
