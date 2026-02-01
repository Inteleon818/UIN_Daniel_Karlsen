import '../style/shoppingitem.scss'

export default function ShoppingItem({id, ware, amount, setShoppingList}) {
    //Varen fjernes fra listen hvis antall blir 0 eller mindre.
    const validateNumber = (e) => {
        const value = parseInt(e.target.value)
        if (value < 1 || value == "") {
            setShoppingList((prev) => prev.filter(item => item.id !== id))
        }
    }

    //Det blir mye duplikat kode her men jeg kunne ikke finne ut en bedre måte å bare ha Egg checked by default på en dynamisk måte.
    if (id == 1) {
        //Id og htmlFor verdi er en sammensetning av 'shopping-item-' og navnet på varen.
        return (
        <li className="shopping-item">
            <input name={ware} id={"shopping-item-"+ware} type="checkbox" defaultChecked></input>
            <label htmlFor={"shopping-item-"+ware} className="ware-label">{ware}</label>
            
            <label htmlFor={"shoppingitem-amount-"+ware}></label>
            <input name="amount" id={"shoppingitem-amount-"+ware} type="number" defaultValue={amount} onInput={validateNumber}></input>
        </li> 
    )
    }
    else {
        return (
        <li className="shopping-item">
            <input name={ware} id={"shopping-item-"+ware} type="checkbox"></input>
            <label htmlFor={"shopping-item-"+ware} className="ware-label">{ware}</label>
            
            <label htmlFor={"shoppingitem-amount-"+ware}></label>
            <input name="amount" id={"shoppingitem-amount-"+ware} type="number" defaultValue={amount} onInput={validateNumber}></input>
        </li>
    )
    }
}



