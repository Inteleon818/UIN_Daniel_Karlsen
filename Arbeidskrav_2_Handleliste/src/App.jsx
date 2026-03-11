import './App.css'
import ShoppingList from './components/ShoppingList'
import AddForm from './components/AddForm'
import './style/layout.scss'
import { useState, useEffect } from 'react'

function App() {
  const shoppingListItems = [
    {
      id: 0,
      ware: "Melk",
      amount: 2,
      isChecked: false
    },
    {
      id: 1,
      ware: "Egg",
      amount: 1,
      isChecked: true
    },
  ]

  const [shoppingItem, setShoppingItem] = useState("")
  const [shoppingList, setShoppingList] = useState(shoppingListItems)
  const [errorMessage, setErrorMessage] = useState()

  const filterShoppingList = (itemId) => 
  {
    setShoppingList((prev) => prev.filter(item => item.id !== itemId))
  }

  const addValueToShoppingList = (uniqueId) => 
  {
    setShoppingList((prev) => ([{id:uniqueId, ...shoppingItem, isChecked:false}, ...prev]))
  }

  //Oppdaterer state slik at verdi endrer seg når bruker skriver ny verdi i inputfeltet.
  const updateAmountInShoppingList = (e, itemId) => 
  {
    setShoppingList((prev) => prev.map(item => item.id === itemId ? {...item, amount: parseInt(e.target.value)} : item))
  }

  const updateCheckedInShoppingList = (e, itemId) => 
  {
    setShoppingList((prev) => prev.map(item => item.id === itemId ? {...item, isChecked: e.target.checked} : item))
  }

  useEffect(() => 
  {
    console.log(shoppingList)
  }, [shoppingList])

  return (
    <main>
      {errorMessage}
      <h1>Handleliste</h1>
      <AddForm shoppingItem={shoppingItem} setShoppingItem={setShoppingItem} setErrorMessage={setErrorMessage} shoppingListItems={shoppingList} addValueToShoppingList={addValueToShoppingList} />
      <ShoppingList shoppingListItems={shoppingList} filterShoppingList={filterShoppingList} updateAmountInShoppingList={updateAmountInShoppingList} updateCheckedInShoppingList={updateCheckedInShoppingList} />
    </main>
  )
}

export default App


