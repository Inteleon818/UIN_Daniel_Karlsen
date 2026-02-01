import '../style/form.scss'

export default function AddForm({shoppingItem, setShoppingItem, setShoppingList, shoppingListItems}) {
    const shoppingItemWare = document.getElementById("shoppingitem-ware");
    const shoppingItemAmount = document.getElementById("shoppingitem-amount");

    const handleChangeInInputString = (e) => {
        const {name, value} = e.target
        setShoppingItem((prev) => ({...prev, [name]: value}))
    }
    //Amount skal tolkes som tallverdier.
    const handleChangeInInputNumber = (e) => {
        const {name, value} = e.target
        setShoppingItem((prev) => ({...prev, [name]: parseInt(value)}))
    } 

    const handleSubmittingValuesInForm = (e) => {
        e.preventDefault()
        const uniqueId = crypto.randomUUID()

        //Forhindrer bruker å skrive inn en vare med ingen verdi eller et antall mindre enn 1.
        if (shoppingItemWare.value == "" || shoppingItemAmount.value < 1) {
            alert("Varen må ha et navn og antall må være minst 1.")
        }
        //Forhindrer duplikatvarer i listen.
        //Søkeord: javascript check if object value exists in list
        //chatlogg: https://share.google/aimode/ihatdV8PldXfbqEr8
        //url: https://www.google.com/search?q=javascript+check+if+object+value+exists+in+list&sca_esv=35e5eccfaf2e56f5&sxsrf=ANbL-n5iFy7HfC6uRMkGGuA3HDUHGJ4RXw%3A1769938604973&ei=rB5_aaiPO6fSwPAP7oi6sAU&ved=0ahUKEwiolcuO_7eSAxUnKRAIHW6EDlYQ4dUDCBA&uact=5&oq=javascript+check+if+object+value+exists+in+list&gs_lp=Egxnd3Mtd2l6LXNlcnAiL2phdmFzY3JpcHQgY2hlY2sgaWYgb2JqZWN0IHZhbHVlIGV4aXN0cyBpbiBsaXN0MgUQIRigAUiKQ1DYCliJQnAGeAGQAQCYAb0BoAHDHqoBBTExLjIyuAEDyAEA-AEBmAInoAKuIMICChAAGLADGNYEGEfCAgQQIxgnwgIIEAAYgAQYywHCAgUQABiABMICBhAAGBYYHsICBhAAGA0YHsICCBAAGAgYDRgewgIIEAAYFhgKGB7CAgUQABjvBcICCBAAGIAEGKIEwgIHECEYoAEYCsICBRAhGJ8FmAMAiAYBkAYIkgcFMTMuMjagB8L5AbIHBDcuMja4B4MgwgcIMC40LjM0LjHIB6oBgAgA&sclient=gws-wiz-serp
        else if (shoppingListItems.some(item => item.ware === shoppingItemWare.value)) {
            alert("Varen er allerede i listen.")
        }
        else {
            //Legger til den nye verdien først før den henter resten av de forrige verdiene i listen.
            setShoppingList((prev) => ([{id:uniqueId, ...shoppingItem}, ...prev]))
        }

        //Viser forrige versjon av listen i konsollen etter man submitter en vare.
        console.log(shoppingListItems)
    }

    return (
        <form className="shoppingitem-form" onSubmit={handleSubmittingValuesInForm}>
            <label htmlFor="shoppingitem-ware">Vare</label>
            <input name="ware" id="shoppingitem-ware" type="text" placeholder="Egg.." onChange={handleChangeInInputString}></input>
            <label htmlFor="shoppingitem-amount">Antall</label>
            <input name="amount" id="shoppingitem-amount" type="number" placeholder="2" onChange={handleChangeInInputNumber}></input>
            <button>Legg til vare</button>
        </form>
    ) 
}



