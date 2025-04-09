import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useToDoData } from '../Context/ToDosContext'

function App() {
  const [count, setCount] = useState(0)
  const [localStorageItem, setLocalStorageItem] = useState()
  const {state, dispatch} = useToDoData()

  useEffect(() => {
    localStorage.setItem('count', `${count}`)
    setLocalStorageItem(localStorage.getItem('saveTheCount'))
  }, [count])

  const getToDos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
      // we will call the dispatch function that remember, expects 2 things:
      // a type and a payload
      dispatch({
        type: 'fetchToDos',
        payload: {todos: data}
      })
    })
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => localStorage.setItem('saveTheCount', `i clicked ${count} times`)}>
          Set the local storage 
        </button>
        <p>local Storage item {localStorageItem}</p>
        <button onClick={() => sessionStorage.setItem('saveSessionCount', `${count}`)}>
          Set Session Storage Simple Object
        </button>
        <button onClick={() => sessionStorage.setItem('user', JSON.stringify({name: 'Alice', address: 'home'}))}>

          Set Session Storage Complex Object
        </button>
        <div style={{padding: '20px'}}>
          <button onClick={() => getToDos()}>
            Get To Dos!
          </button>
          {state.todos.map(todo => (
            <li key={todo.id}>{todo.id} -- {todo.title}</li>
          ))}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
