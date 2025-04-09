import {useState, useEffect} from 'react'
import {Button, Modal, Box, Stack, TextField, MenuItem} from '@mui/material'
import {LocalizationProvider, DatePicker} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

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

export default function EditTransactionModal({transaction, transactionEditModalOpen, setTransactionEditModalOpen, getTransactions}) {
    const [description, setDescription] = useState()
    const [type, setType] = useState()
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()

    const handleModalClose = () => setTransactionEditModalOpen(false)

    useEffect(() => {
        setDescription(transaction?.description || '')
        setAmount(transaction?.amount || 0)
        setType(transaction?.type || 'income')
        setDate(dayjs(transaction?.date) || dayjs())
        

    }, [transaction])

  const editTransaction = async () => {
    const newTransaction = {
      description: description,
      type: type,
      amount: amount,
      date: date
    }

    await fetch(`http://localhost:3000/transactions/${transaction.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    await getTransactions()
    await setTransactionEditModalOpen(false)

  }

    return ( 
        <Modal open={transactionEditModalOpen} onClose={handleModalClose}>
        <Box sx={style}>
            <h3>Edit Transaction Details</h3>
            <Stack spacing={2}>
              <TextField required value={description} label = 'Description' onChange={event => setDescription(event.target.value)}/>
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
            <Button onClick={editTransaction}>Add Transaction</Button>
            <Button onClick={handleModalClose}>Close</Button>
        </Box>
     </Modal>
    )

}
