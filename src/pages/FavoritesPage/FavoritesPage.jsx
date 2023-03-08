import React from "react";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const navigate = useNavigate();

  const fav = JSON.parse(localStorage.getItem("favorites"));
  console.log(fav);

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
          className="product_card"
        >
          <div className="product_card_sort">
            <div className="product_card_content">
              <img src={card.img} alt="error:(" className="prd_content_img" />
              <span className="prd_content_span">{card.category}</span>
              <div className="prd_content_flex">
                <h5 className="prd_content_title">{card.title}</h5>
                <h6 className="prd_content_price">${card.price}</h6>
                <h6 className="prd_content_price">Like: {card.like}</h6>
              </div>
              <button className="prd_content_btn">Buy Now</button>
              <button
                onClick={() => navigate(`/edit/${card.id}`)}
                className="prd_content_btn_2"
              >
                Edit
              </button>
              <button
                onClick={() => navigate(`/details/${card.id}`)}
                className="prd_content_btn_2"
              >
                Details
              </button>
              <button className="prd_content_btn_2">Delete</button>
              <button className="prd_content_btn_2">Dislike</button>
              <button className="prd_content_btn_2">Like</button>
              <button className="prd_content_btn_2">Favorites</button>
              favProduct
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FavoritesPage;
