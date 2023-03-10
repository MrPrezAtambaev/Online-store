import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useProducts } from "../../context/ProductsContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavAndLike } from "../../context/FavAndLikeContextProvider";
import { useCart } from "../../context/CartContextProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const FavoritesPage = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {deleteProduct,likeProduct, getOneProduct, oneProduct} = useProducts();
  const {addProductToCart} = useCart()
  const [favorite, setFavorite] = useState()
  
  const fav = JSON.parse(localStorage.getItem("favorites"));
  
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const favProduct = (card) => {
    const products = JSON.parse(localStorage.getItem("favorites"));
    products.push(card);
    localStorage.setItem("favorites", JSON.stringify(products));
    setFavorite(true);
  };

  function delFavorite(id) {
      let products = JSON.parse(localStorage.getItem('favorites'))
      products = products.map((elem) => elem.id !== id)
      localStorage.setItem('favorites', JSON.stringify(products))
      setFavorite(false)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      {fav?.map((card) => (
        <div
          key={card.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40%",
            flexWrap: "wrap",
          }}
          className="product_card">
            <Box sx={{ flexGrow: 1, marginRight: "4rem", paddingTop: "2rem" }}>
              <AppBar sx={{ backgroundColor: "black" }} position="static">
                  {localStorage.getItem("admin") === "true" && (
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
                        <MoreVertIcon />
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
              )}
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
              {favorite ? (
                <FavoriteBorderIcon
                  style={{ background: "gray" }}
                  onClick={() => favProduct(card)}
                  className="fav_btn"
                ></FavoriteBorderIcon>
              ) : (
                <FavoriteBorderIcon
                  onClick={() => delFavorite(card.id)}
                  className="fav_btn"
                ></FavoriteBorderIcon>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
