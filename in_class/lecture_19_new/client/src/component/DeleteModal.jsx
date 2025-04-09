import {Button, Modal, Box} from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'gray',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function DeleteModal({transactionID, transactionDeleteModalOpen, setTransactionDeleteModalOpen, getTransactions}) {

    const handleModalClose = () => setTransactionDeleteModalOpen(false)

  const deleteTransaction = async () => {


    await fetch(`http://localhost:3000/transactions/${transactionID}`, {
      method: "DELETE",
    })
    await getTransactions()
    await setTransactionDeleteModalOpen(false)

  }

    return ( 
        <Modal open={transactionDeleteModalOpen} onClose={handleModalClose}>
        <Box sx={style}>
            Are you sure you want to delete?
            <Button onClick={deleteTransaction}>Delete Transaction</Button>
            <Button onClick={handleModalClose}>Close</Button>
        </Box>
     </Modal>
    )

}