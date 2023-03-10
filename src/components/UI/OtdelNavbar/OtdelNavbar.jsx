import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { useProducts } from "../../../context/ProductsContext";
import { useCart } from "../../../context/CartContextProvider";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const OtdelNavbar = ({ avatarUrl }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { getProducts, setPage } = useProducts();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      type: "Register",
      path: "/register",
    },
    {
      type: "Login",
      path: "/login",
    },
  ];

  const { logout, user, checkAuth } = useAuth();
  const { cartLength } = useCart();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const handleBurgerClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div style={{ background: "black" }}>
        <div className="fix">
          <div className="navbar" style={{ top: 0 }}>
            <div className="navbar__content">
              <img src="" className="navbar__content_img" alt="" />
              <h5 className="navbar__content_title"></h5>
            </div>
            <div className="navbar_shop">
              <a href="/" className="navbar_link">
                Shop
              </a>
              <a href="/about" className="navbar_link">
                About Us
              </a>
              <a href="#" className="navbar_link">
                Partners
              </a>
            </div>
            <div
              className="navbar__burger"
              onClick={handleBurgerClick}
              style={{ color: "white" }}
            >
              <div className="navbar__burger_line"></div>
              <div className="navbar__burger_line"></div>
              <div className="navbar__burger_line"></div>
            </div>

            {showMenu && (
              <>
                <div className="navbar_shop--mobile">
                  <a href="/" className="navbar_link">
                    Shop
                  </a>
                  <a href="/about" className="navbar_link">
                    About Us
                  </a>
                  <a href="#" className="navbar_link">
                    Partners
                  </a>
                </div>
              </>
            )}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              type="search"
              name=""
              id=""
              className="navbar_search"
            />
            <button className="navbar_card">
              <IconButton
                size="large"
                color="inherit"
                onClick={() => navigate("/cart")}
                style={{ padding: 0 }}
              >
                <Badge badgeContent={cartLength} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </button>
            <Box sx={{ flexGrow: 0, paddingRight: "1rem" }}>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={avatarUrl} alt={user} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {localStorage.getItem("username") ? (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => navigate("/profile")}
                      >
                        Profile
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={logout}>
                        Logout
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => navigate("/favorites")}
                      >
                        Favorites
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  settings.map((setting) => (
                    <MenuItem key={setting.type} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => navigate(setting.path)}
                      >
                        {setting.type}
                      </Typography>
                    </MenuItem>
                  ))
                )}
              </Menu>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtdelNavbar;
