import { Button, Modal, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../../context/ProductsContext";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalProduct = ({ card }) => {
  const { oneProduct, getOneProduct, likeProduct, deleteComment } =
    useProducts();
  const user = localStorage.getItem("username");
  const [comment, setComments] = useState({ item: "", id: Date.now() });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   getOneProduct(card.id)
  // }, [])
 

  const handleInp = (e) => {
    let obj = {
      ...comment,
      [e.target.name]: e.target.value,
    };
    setComments(obj);
    // comment("");
  };

  function commentProduct() {
    card.comments.push(comment)
    likeProduct(card)
    console.log(card.comments)
  }

  return (
        <>
        <div style={{display: 'flex', alignItems: 'center'}} >
         <Button  sx={{color: 'gray'}} onClick={handleOpen} >
            Review
         </Button>
                  <>
                    <h1 style={{fontSize: '17px', paddingTop: '7px', padding: ''}} >{card.comments.length}</h1>
                  </>
        </div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <input name='item' value={comment.item} onChange={handleInp} type="text" />
                  <button onClick={commentProduct} >
                   Review 
                  </button>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {card? (
                      <>
                        {card.comments.map(elem => (
                          <div key={elem.id}>
                            <h1>{user}</h1>
                            <h1 style={{color: 'black'}}>{elem.item}</h1>
                            <button onClick={() => deleteComment(card.id, elem.id)}>Delete</button>
                          </div>

                        ))}
                      </>
                    ) : (
                      <h1>Error</h1>
                    )}
                </Typography>
            </Box>
        </Modal>
        </>
  )
}
=======
    oneProduct.comments.push(comment);
    likeProduct(oneProduct);
    console.log(oneProduct.comments);
  }

  return (
    <>
      <div style={{ position: "relative" }}>
        <Button
          sx={{
            color: "white",
            position: "absolute",
            bottom: "-40px",
            left: "-340px",
          }}
          onClick={handleOpen}
        >
          Review
        </Button>
        {oneProduct ? (
          <>
            <h1
              key={oneProduct.id}
              style={{
                fontSize: "17px",
                paddingTop: "7px",
                marginTop: "7px",
                padding: "",
                color: "white",
                position: "absolute",
                bottom: "-40px",
                left: "-275px",
              }}
            >
              {oneProduct.comments.length}
            </h1>
          </>
        ) : (
          <h1>Error</h1>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Tooltip title="Profile">
              <IconButton sx={{ paddingLeft: "2px" }}>
                <Avatar alt={user} src="..." />
              </IconButton>
            </Tooltip>
            <input
              name="item"
              placeholder="add comment"
              value={comment.item}
              onChange={handleInp}
              type="text"
            />
            <SendIcon
              onClick={commentProduct}
              style={{ color: "gray", cursor: "pointer", margin: "2px" }}
            ></SendIcon>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {oneProduct ? (
              <>
                {oneProduct.comments.map((elem) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Tooltip title="Profile">
                      <IconButton sx={{ paddingLeft: "2px" }}>
                        <Avatar alt={user} src="..." />
                      </IconButton>
                    </Tooltip>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "10px",
                      }}
                    >
                      <h4 style={{ margin: "0", color: "black" }}>{user}</h4>
                      <p style={{ margin: "0", color: "black" }}>{elem.item}</p>
                    </div>
                    <DeleteIcon
                      onClick={() => deleteComment(elem.id)}
                      style={{
                        color: "black",
                        marginLeft: "160px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </DeleteIcon>
                  </div>
                ))}
              </>
            ) : (
              <h1>Error</h1>
            )}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalProduct;
