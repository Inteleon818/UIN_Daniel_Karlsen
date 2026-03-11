import ShoppingItem from './ShoppingItem'
import '../style/shoppinglist.scss'

export default function ShoppingList({shoppingListItems, filterShoppingList, updateAmountInShoppingList, updateCheckedInShoppingList}) {
    return (
        <ul className="shopping-list">
            {shoppingListItems.map((item) => <ShoppingItem key={item.id} itemId={item.id} ware={item.ware} amount={item.amount} isChecked={item.isChecked} filterShoppingList={filterShoppingList} updateAmountInShoppingList={updateAmountInShoppingList} updateCheckedInShoppingList={updateCheckedInShoppingList} />)}
        </ul>
    ) 
}

