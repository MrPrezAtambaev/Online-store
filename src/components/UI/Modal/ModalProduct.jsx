import { Button, Modal, Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../../context/ProductsContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalProduct = ({card}) => {
  const {oneProduct, getOneProduct, likeProduct, deleteComment} = useProducts()
  const user = localStorage.getItem('username')
  const [comment, setComments] = useState({item: '', id: Date.now()})
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getOneProduct(card.id)
  }, [])
  
  const handleInp = (e) => {
      let obj = {
        ...comment,
        [e.target.name]: e.target.value,
      };
      setComments(obj);
  };

  function commentProduct() {
    oneProduct.comments.push(comment)
    likeProduct(oneProduct)
    console.log(oneProduct.comments)
  }

  return (
        <>
        <div style={{display: 'flex', alignItems: 'center'}} >
         <Button  sx={{color: 'gray'}} onClick={handleOpen} >
            Review
         </Button>
            {oneProduct? (
                  <>
                    <h1 style={{fontSize: '17px', paddingTop: '7px', padding: ''}} >{oneProduct.comments.length}</h1>
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
                  <input name='item' value={comment.item} onChange={handleInp} type="text" />
                  <button onClick={commentProduct} >
                   Review 
                  </button>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {oneProduct? (
                      <>
                        {oneProduct.comments.map(elem => (
                          <>
                            <h1>{user}</h1>
                            <h1 style={{color: 'black'}}>{elem.item}</h1>
                            <button onClick={() => deleteComment(elem.id)} >Delete</button>
                          </>

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

export default ModalProduct