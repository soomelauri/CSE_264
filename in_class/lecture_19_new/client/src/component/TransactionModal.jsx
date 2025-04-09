import {useState} from 'react'
import {Button, Modal, Box, Stack, TextField, MenuItem} from '@mui/material'
import {LocalizationProvider, DatePicker} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'

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

export default function TransactionModal({transactionModalOpen, setTransactionModalOpen, getTransactions}) {
    const [description, setDescription] = useState()
    const [type, setType] = useState()
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()

    const handleModalClose = () => setTransactionModalOpen(false)

  const addTransaction = async () => {
    const newTransaction = {
      description: description,
      type: type,
      amount: amount,
      date: date
    }

    await fetch('http://localhost:3000/transactions', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    await getTransactions()
    await setTransactionModalOpen(false)

  }

    return ( 
        <Modal open={transactionModalOpen} onClose={handleModalClose}>
        <Box sx={style}>
            <h3>Enter Transaction Details</h3>
            <Stack spacing={2}>
              <TextField required label='Description' onChange={event => setDescription(event.target.value)}/>
              <TextField select label='Type' onChange={event => setType(event.target.value)}>
                <MenuItem key='expense' value='expense'>
                Expense
                </MenuItem>
                <MenuItem key='income' value='income'>
                Income
                </MenuItem>
              </TextField>
              <TextField required label='Amount' type='number' onChange={event => setAmount(event.target.value)}/>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='Transaction Date' onChange={(value) => setDate(value.toISOString())}/>
              </LocalizationProvider>
            </Stack>
            <Button onClick={addTransaction}>Add Transaction</Button>
            <Button onClick={handleModalClose}>Close</Button>
        </Box>
     </Modal>
    )

}