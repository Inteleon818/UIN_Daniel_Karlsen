import { useState } from 'react'
import '../style/shoppingitem.scss'

export default function ShoppingItem({itemId, ware, amount, isChecked, filterShoppingList, updateAmountInShoppingList, updateCheckedInShoppingList}) {
    const [itemIsChecked, setItemIsChecked] = useState(isChecked)

    //Setter itemIsChecked til boolean verdien av checkbox verdien.
    const handleChange = (e) => 
    {
        setItemIsChecked(e.target.checked)
        updateCheckedInShoppingList(e, itemId)
    }

    //Varen fjernes fra listen hvis antall blir 0 eller mindre, ellers oppdaterer state med ny verdi.
    const validateNumber = (e) => {
        const value = parseInt(e.target.value)
        if (value < 1 || isNaN(value)) {
            filterShoppingList(itemId)
        }
        else 
        {
            updateAmountInShoppingList(e, itemId) 
        }
    }
    
    return (
        <li className="shopping-item">
            <input name={ware} id={"shopping-item-"+ware} type="checkbox" checked={itemIsChecked} onChange={handleChange}></input>
            <label htmlFor={"shopping-item-"+ware} className="ware-label">{ware}</label>
            
            <label htmlFor={"shoppingitem-amount-"+ware}></label>
            <input name="amount" id={"shoppingitem-amount-"+ware} type="number" value={amount} onInput={validateNumber}></input>
        </li> 
    )
}

