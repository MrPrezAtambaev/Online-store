import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../context/ProductsContext";
import { useCart } from "../../../context/CartContextProvider";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ card }) => {
  const {
    deleteProduct,
    likeProduct,
    getOneProduct,
    setLikeStorage,
    oneProduct,
  } = useProducts();
  const [likes, setLike] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { addProductToCart, checkProductInCart } = useCart();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    // if(localStorage.getItem('username')) {
    setLikeStorage();
    getOneProduct(card.id);
    // }
  }, []);

  useEffect(() => {
    setLike(!true);
  }, [oneProduct]);

  function addLike() {
    oneProduct.like += 1;
    likeProduct(oneProduct);
    let STlikes = JSON.parse(localStorage.getItem("likes"));
    STlikes.push(oneProduct);
    localStorage.setItem("likes", JSON.stringify(STlikes));
    setLike(true);
  }

  const favProduct = () => {
    const products = JSON.parse(localStorage.getItem("favorites"));
    products.push(oneProduct);
    localStorage.setItem("favorites", JSON.stringify(products));
    setFavorite(true);
  };

  function disLike() {
    oneProduct.like -= 1;
    likeProduct(oneProduct);
    setLike(false);
    console.log(oneProduct);
  }

  const navigate = useNavigate();

  return (
    <div className="product_card">
      <Box sx={{ flexGrow: 1, marginRight: "4rem", paddingTop: "2rem" }}>
        <AppBar sx={{ backgroundColor: "black" }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => navigate(`/edit/${card.id}`)}>
                    Edit
                  </MenuItem>
                  <MenuItem onClick={() => deleteProduct(card.id)}>
                    Detete
                  </MenuItem>
                  <MenuItem onClick={() => navigate(`/details/${card.id}`)}>
                    Details
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      <div className="product_card_sort">
        <div className="product_card_content">
          <img src={card.img} alt="error:(" className="prd_content_img" />

          <span className="prd_content_span">{card.category}</span>
          <div className="prd_content_flex">
            <h5 className="prd_content_title">{card.title}</h5>
            <h6 className="prd_content_price">${card.price}</h6>
            <h6 className="prd_content_price">Like: {card.like}</h6>
          </div>

          <button
            className="prd_content_btn"
            onClick={() => addProductToCart(card)}
          >
            Buy Now
          </button>

          {likes ? (
            <button onClick={disLike} className="prd_content_btn_2">
              Dislike
            </button>
          ) : (
            <button
              style={{ background: "red", color: "white" }}
              onClick={addLike}
              className="prd_content_btn_2"
            >
              Like
            </button>
          )}
          {favorite ? (
            <FavoriteBorderIcon
              style={{ background: "gray" }}
              onClick={favProduct}
              className="fav_btn"
            ></FavoriteBorderIcon>
          ) : (
            <FavoriteBorderIcon
              onClick={favProduct}
              className="fav_btn"
            ></FavoriteBorderIcon>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
