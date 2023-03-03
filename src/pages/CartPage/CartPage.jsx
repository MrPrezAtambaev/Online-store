import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// custom
import { useCart } from "../../context/CartContextProvider";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./CartPage.css";

export default function CartPage() {
  const { getCart, cart, changeProductCount, deleteProductFromCart } =
    useCart();

  const navigate = useNavigate();

  React.useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  return (
    <>
      <h3 style={{ color: "white" }}>Card Page</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Color</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Count</TableCell>
              <TableCell align="center">Sub Price</TableCell>
              <TableCell align="center">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map((row) => (
              <TableRow
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <img src={row.item.img} alt="error:(" width="50" />
                </TableCell>
                <TableCell align="center">{row.item.title}</TableCell>
                <TableCell align="center">{row.item.type}</TableCell>
                <TableCell align="center">{row.item.category}</TableCell>
                <TableCell align="center">{row.item.color}</TableCell>
                <TableCell align="center">${row.item.price}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="reduce"
                    size="small"
                    onClick={() =>
                      changeProductCount(row.count - 1, row.item.id)
                    }
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <TextField
                    type="number"
                    size="small"
                    value={row.count}
                    onChange={(e) =>
                      changeProductCount(e.target.value, row.item.id)
                    }
                  />
                  <IconButton
                    aria-label="increase"
                    size="small"
                    onClick={() =>
                      changeProductCount(row.count + 1, row.item.id)
                    }
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">${row.subPrice}</TableCell>
                <TableCell align="center">
                  <button
                    onClick={() => deleteProductFromCart(row.item.id)}
                    className="custom-btn btn-9"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="h6" component="div">
          Total Price: ${cart?.totalPrice}
          <Button
            onClick={() => {
              cartCleaner();
              navigate("/");
            }}
          >
            BUY NOW
          </Button>
        </Typography>
      </TableContainer>
    </>
  );
}
