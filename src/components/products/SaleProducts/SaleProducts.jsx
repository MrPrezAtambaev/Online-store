import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useProducts } from "../../../context/ProductsContext";

const SaleProducts = () => {
  const { fetchByParams } = useProducts();
  return (
    <div>
      <h1 className="product_card_title">Best Selling Headphones</h1>
      <div className="product_card_block">
        <div className="product_card_content">
          <img
            src="https://www.energysistem.com/cdnassets/products/45303/principal_2000.jpg"
            alt=""
            className="prd_content_img"
          />

          <span className="prd_content_span">Wireless Headphones</span>
          <div className="prd_content_flex">
            <h5 className="prd_content_title">MOMENTUM 4 Wireless</h5>
            <h6 className="prd_content_price">$‌349.95</h6>
          </div>

          <button className="prd_content_btn">Buy Now</button>

          <button className="prd_content_btn_2">Compare</button>
        </div>

        <div className="product_card_content">
          <img
            src="https://cdn.shopify.com/s/files/1/0573/2309/4216/products/LosAngeles_SandGold_001.png?v=1650876856"
            alt=""
            className="prd_content_img"
          />

          <span className="prd_content_span">Wireless Headphones</span>
          <div className="prd_content_flex">
            <h5 className="prd_content_title">MOMENTUM 4 Wireless</h5>
            <h6 className="prd_content_price">$‌349.95</h6>
          </div>

          <button className="prd_content_btn">Buy Now</button>

          <button className="prd_content_btn_2">Compare</button>
        </div>

        <div className="product_card_content">
          <img
            src="https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="prd_content_img"
          />

          <span className="prd_content_span">Wireless Headphones</span>
          <div className="prd_content_flex">
            <h5 className="prd_content_title">MOMENTUM 4 Wireless</h5>
            <h6 className="prd_content_price">$‌349.95</h6>
          </div>

          <button className="prd_content_btn">Buy Now</button>

          <button className="prd_content_btn_2">Compare</button>
        </div>
      </div>

      <div className="product_all">
        <h1 style={{ marginTop: "5rem" }} className="product_card_title">
          All Headphones
        </h1>
        <div className="all_block">
          <Accordion
            sx={{ background: "black", color: "white", marginTop: "3rem" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Features</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Features
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={(e) => fetchByParams("love", e.target.value)}
                  >
                    <FormControlLabel
                      value="jj"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="Adaptable Acoustics"
                      control={<Radio />}
                      label="Adaptable Acoustics"
                    />
                    <FormControlLabel
                      value="Active Noise Cancellation"
                      control={<Radio />}
                      label="Active Noise Cancellation"
                    />
                    <FormControlLabel
                      value="Wireless Charging"
                      control={<Radio />}
                      label="Wireless Charging"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <hr />

          <Accordion sx={{ background: "black", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Category</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Categories
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={(e) => fetchByParams("type", e.target.value)}
                  >
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="electronics"
                      control={<Radio />}
                      label="Electronics"
                    />
                    <FormControlLabel
                      value="Headphones"
                      control={<Radio />}
                      label="HeadPhones"
                    />
                    <FormControlLabel
                      value="Wireless earbuds"
                      control={<Radio />}
                      label="Wireless earbuds"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <hr />

          <Accordion sx={{ background: "black", color: "white" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Color</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Color
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={(e) => fetchByParams("color", e.target.value)}
                  >
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="Black"
                      control={<Radio />}
                      label="Black"
                    />
                    <FormControlLabel
                      value="White"
                      control={<Radio />}
                      label="White"
                    />
                    <FormControlLabel
                      value="Red"
                      control={<Radio />}
                      label="Red"
                    />
                  </RadioGroup>
                </FormControl>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SaleProducts;
