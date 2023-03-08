import React, { useEffect } from "react";
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

const FavoritesPage = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {deleteProduct,likeProduct, getOneProduct, oneProduct} = useProducts();
  const {favorite, favProduct, delFavorite} = useFavAndLike()
  const {addProductToCart} = useCart()
  
  const fav = JSON.parse(localStorage.getItem("favorites"));
  
  useEffect(() => {
    {fav?.map((card) => (
        getOneProduct(card.id)
    ))}
  }, [])

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <>
      {fav?.map((card) => (
        <div
          key={card.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "850px",
            width: "40%",
            flexWrap: "wrap",
          }}
          className="product_card">
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
              {favorite ? (
                <FavoriteBorderIcon
                  style={{ background: "gray" }}
                  onClick={() => favProduct(oneProduct)}
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
    </>
  );
};

export default FavoritesPage;
