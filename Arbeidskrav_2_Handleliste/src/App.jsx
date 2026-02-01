import './App.css'
import ShoppingList from './components/ShoppingList'
import AddForm from './components/AddForm'
import './style/layout.scss'
import { useState } from 'react'

function App() {
  const shoppingListItems = [
    {
      id: 0,
      ware: "Melk",
      amount: 2
    },
    {
      id: 1,
      ware: "Egg",
      amount: 1
    },
  ]

  const [shoppingItem, setShoppingItem] = useState()
  const [shoppingList, setShoppingList] = useState(shoppingListItems)

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm shoppingItem={shoppingItem} setShoppingItem={setShoppingItem} setShoppingList={setShoppingList} shoppingListItems={shoppingList}/>
      <ShoppingList shoppingListItems={shoppingList} setShoppingList={setShoppingList}/>
    </main>
  )
}

export default App


