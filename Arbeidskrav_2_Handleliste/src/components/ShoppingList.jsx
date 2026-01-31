import ShoppingItem from './ShoppingItem'
import '../style/shoppinglist.scss'

export default function ShoppingList({shoppingListItems}) {
    return (
        <ul className="shopping-list">
            {shoppingListItems.map((item) => <ShoppingItem key={item.id} id={item.id} ware={item.ware} amount={item.amount}/>)}
        </ul>
    ) 
}

