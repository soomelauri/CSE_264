import { useState } from 'react'
import './App.css'


const ACountRepComponent = ({ count, childCount, onIncreaseChild }) => {
  return (
    <div style={{color: 'lightblue'}}>
      <h2>This is from our component</h2>
      <h3>Here is count from the parent component: {count}</h3>
      <h3>Here is count from the child component: {childCount}</h3>
      <button onClick={onIncreaseChild}>Increase Child Count from Child (+)</button>
    </div>
  )
}

function App() {
  // Common practice to use a normal variable name for the variable (1st argument)
  // and set theVariable as function
  const [count, setCount] = useState(0)
  const [childCount, setChildCount] = useState(10)

  const buttonIncreaseClick = () => {
    setCount(count + 1)
  }

  const buttonDecreaseClick = () => {
    setCount(count - 1)
  }

  const increaseChildCount = () => {
    setChildCount(childCount + 1)
  }

  const someText = 'Here is some text coming from a variable.'

  return (
    // React Only likes to return one thing
    // In this case i'll wrap everything into a div and it'll be fine
    <div>
      <h1>Welcome to Lecture 17</h1>
      <h2>Here is some text from a JS variable {someText}</h2>
      <h3>The current count is {count}</h3>
      <button onClick={buttonIncreaseClick}>Increase the Count (+)</button>
      <button onClick={buttonDecreaseClick}>Decrease the Count (-)</button>
      <button onClick={increaseChildCount}>Increase the Child Count (+)</button>
      <ACountRepComponent 
        count={count} 
        childCount={childCount} 
        onIncreaseChild={increaseChildCount}
      />
    </div>
  )
}

export default App
