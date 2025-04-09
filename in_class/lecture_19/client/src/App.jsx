import { useEffect, useMemo, useState } from 'react'
import { Button, Stack, Box } from '@mui/material'
import TransactionModal from './components/TransactionModal'
import { MaterialReactTable } from 'material-react-table'
import DeleteModal from './components/DeleteModal'

function App() {

  const [transactions, setTransactions] = useState([])
  const [currentBalance, setCurrentBalance] = useState(0)
  const [selectedTransaction, setSelectedTransaction] = useState()
  const [transactionDeleteModalOpen, setTransactionDeleteModalOpen] = useState(false)


  const [transactionModalOpen, setTransactionModalOpen] = useState(false)

  const handleModalOpen = () => setTransactionModalOpen(true)

  const getTransactions = async () => {
    fetch("http://localhost:3005/transactions")
    .then(res => res.json())
    .then(data => {
      setTransactions(data)
      const totalIncome = data.filter(transaction => transaction.type === 'income').reduce((acc, currentValue) => acc + Number(currentValue.amount), 0)
      const totalExpense = data.filter(transaction => transaction.type === 'expense').reduce((acc, currentValue) => acc + Number(currentValue.amount), 0)
      setCurrentBalance(totalIncome - totalExpense)
    })
  }

  useEffect(() => {
    getTransactions()
  }, [])

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
      <div style={{color: row.original.type === 'expense' ? 'red' : 'black'}}>
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
      <Stack direction={'row'} spacing={60}>
      <Button onClick={handleModalOpen}> + Add Transaction </Button>
      <div>
        Current Balance: ${currentBalance}
      </div>
      </Stack>
      <MaterialReactTable data={transactions} columns={columns}
      enableRowActions
      renderRowActionMenuItems={({ row, table}) => {
        <Box>
        <Button onClick={() => {
          setSelectedTransaction(row.original.id)
          setTransactionDeleteModalOpen(true)
        }}>Delete</Button>
        <Button>Edit</Button>
      </Box>
      }}/>
      <TransactionModal transactionModalOpen={transactionModalOpen} setTransactionModalOpen={setTransactionModalOpen}
       getTransactions={getTransactions}/>
       <DeleteModal transactionID={transactioID}
       transactionDeleteModalOpen={transactionDeleteModalOpen}
       setTransactionDeleteModalOpen={setTransactionDeleteModalOpen}
       getTransactions={getTransactions} />
    </>
  )
}

export default App
