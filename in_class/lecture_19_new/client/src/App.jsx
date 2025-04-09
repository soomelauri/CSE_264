import { useState, useEffect, useMemo } from 'react'
// ADDING SNACKBAR FOR ERROR MESSAGES
import {Button, Stack, Box, Snackbar, MenuItem } from '@mui/material'
import {MaterialReactTable} from 'material-react-table'

import './App.css'
import TransactionModal from './component/TransactionModal'
import DeleteModal from './component/DeleteModal'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import EditTransactionModal from './component/EditTransactionModal'

function App() {
  
  const [transactions, setTransactions] = useState([])
  const [currentBalance, setCurrentBalance] = useState(0)
  const [selectedTransaction, setSelectedTransaction] = useState()
  const [transactionModalOpen, setTransactionModalOpen] = useState(false)
  const [transactionDeleteModalOpen, setTransactionDeleteModalOpen] = useState(false)
  const [transactionEditModalOpen, setTransactionEditModalOpen] = useState(false)
  // NEW CODE FOR ERROR HANDLING
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  
  const handleModalOpen = () => setTransactionModalOpen(true)
  const handleSnackBarClose = () => setSnackbarOpen(false)


  //REWROTE FOR BETTER ERROR HANDLING
  const getTransactions = async () => {
    try {
      const resp = await fetch("http://localhost:3000/transactions")
      //NEW ERROR CATCHING!!
      if(!resp.ok) {
        setSnackbarOpen(true)
      }
      const data = await resp.json()
      setTransactions(data)
      const totalIncome = data.filter(transaction => transaction.type === 'income').reduce((acc, currentValue) => acc + Number(currentValue.amount), 0)
      const totalExpense = data.filter(transaction => transaction.type === 'expense').reduce((acc, currentValue) => acc + Number(currentValue.amount), 0)
      setCurrentBalance(totalIncome - totalExpense)
      // NEW ERROR CATCHING EXAMPLE!
    } catch (err) {
      console.error(err)
      setSnackbarOpen(true)
    }
  }

  useEffect(() => {
    getTransactions()
  },[])

  const columns = useMemo(() => [
    {
      accessorKey: 'description',
      header: "Description"
    },
    {
      accessorKey: 'type',
      header: "Type"
    },
    {
      accessorKey: 'amount',
      header: "Amount",
      Cell: ({row, cell}) => (
        <div style={{color: row.original.type === 'expense' ? 'red':'black'}}>
          ${cell.getValue()}
        </div>
      )
    },
    {
      accessorKey: 'date',
      header: "Date"
    }
  ], [])
  
  return (
    <>
     <h1>Budget Tracking Application</h1>
     <Stack direction='row' spacing={60}>
     <Button onClick={handleModalOpen}>+ Add transaction</Button>
     <div>
      Current Balance: ${currentBalance}
     </div>
     </Stack>
     
     <MaterialReactTable data={transactions} columns={columns}
      enableRowActions
      renderRowActionMenuItems={({ row }) => [
      <MenuItem key='delete' onClick={() => {
            setSelectedTransaction(row.original.id)
            setTransactionDeleteModalOpen(true)
          }}>
      Delete
    </MenuItem>,
    <MenuItem key='edit' onClick={() => {
      setSelectedTransaction(row.original.id)
    }}>
      <MenuItem key='edit' onClick={() => {
        setSelectedTransaction(row.original)
        setTransactionEditModalOpen(true)
      }}>
      </MenuItem>
    <EditIcon />
    </MenuItem>
      ]}/>
     <TransactionModal transactionModalOpen={transactionModalOpen}
     setTransactionModalOpen={setTransactionModalOpen} getTransactions={getTransactions}/>
     <DeleteModal transactionID={selectedTransaction} transactionDeleteModalOpen={transactionDeleteModalOpen}
     setTransactionDeleteModalOpen={setTransactionDeleteModalOpen}
     getTransactions={getTransactions}/>
     <EditTransactionModal transaction={selectedTransaction}
     transactionEditModalOpen={transactionEditModalOpen}
     setTransactionEditModalOpen={setTransactionEditModalOpen}
     getTransactions={getTransactions}/>
     {/* NEW ERROR HANDLING MESSAGE */}
     <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        onClose={handleSnackBarClose}
        message="Error Getting Transaction Data"
      />
    </>
  )
}

export default App
