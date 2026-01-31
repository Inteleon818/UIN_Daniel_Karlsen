import '../style/form.scss'

export default function AddForm({shoppingItem, setShoppingItem, setShoppingList, shoppingList}) {
    const handleChangeInInput = (e) => {
        const {name, value} = e.target
        setShoppingItem((prev) => ({...prev, [name]: value}))

        console.log({[name]: value})
        console.log("ToDo state: ", shoppingItem)
    }

    const handleSubmittingValuesInForm = (e) => {
        e.preventDefault()
        const uniqueId = crypto.randomUUID()
        //Legger til den nye verdien først før den henter resten av de forrige verdiene i listen.
        setShoppingList((prev) => ([{id:uniqueId, ...shoppingItem}, ...prev]))

        //Viser listen i konsollen etter man submitter en vare.
        console.log(shoppingList)
    }

    return (
        <form className="shoppingitem-form" onSubmit={handleSubmittingValuesInForm}>
            <label htmlFor="shoppingitem-ware">Vare</label>
            <input name="ware" id="shoppingitem-ware" type="text" placeholder="Egg.." onChange={handleChangeInInput} required></input>
            <label htmlFor="shoppingitem-amount">Antall</label>
            <input name="amount" id="shoppingitem-amount" type="number" placeholder="2" onChange={handleChangeInInput} min="1" required></input>
            <button>Legg til vare</button>
        </form>
    ) 
}


