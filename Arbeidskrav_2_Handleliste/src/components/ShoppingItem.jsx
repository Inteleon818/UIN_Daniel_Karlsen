import '../style/shoppingitem.scss'

export default function ShoppingItem({id, ware, amount}) {
    //Forhindrer at brukeren kan skrive tall lavere enn 0 ved å forandre den illegale verdien til 1.
    //Små deler tatt fra dette Google søket:
    //html prevent input outside of number range
    //Chatlogg
    //https://share.google/aimode/akaVDJaR48CTcF4FM
    //url
    //https://www.google.com/search?q=html+prevent+input+outside+of+number+range&sca_esv=1fb5ba756bd76908&sxsrf=ANbL-n6KoV8sAkz0RR8yyOyEdPqLq0q76A%3A1769884404060&ei=9Ep-abauA5PWwPAPzpeKwQo&ved=0ahUKEwi2-MmZtbaSAxUTKxAIHc6LIqgQ4dUDCBA&uact=5&oq=html+prevent+input+outside+of+number+range&gs_lp=Egxnd3Mtd2l6LXNlcnAiKmh0bWwgcHJldmVudCBpbnB1dCBvdXRzaWRlIG9mIG51bWJlciByYW5nZTIFECEYoAEyBRAhGJ8FMgUQIRifBTIFECEYnwVIwGJQAFiNYXABeAGQAQCYAbcBoAG0IaoBBTI0LjE4uAEDyAEA-AEBmAIroALAIqgCCsICBxAjGCcY6gLCAgcQLhgnGOoCwgIMECMYgAQYExgnGIoFwgIEECMYJ8ICChAAGIAEGEMYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgINEAAYgAQYsQMYQxiKBcICBRAAGIAEwgIGEAAYFhgewgIIEAAYFhgKGB7CAgUQABjvBcICCBAAGIAEGKIEwgIHECEYoAEYCsICBBAhGBWYAwXxBRvho5Wk6bvakgcFMjEuMjKgB47wAbIHBTIwLjIyuAe7IsIHBjEuMzkuM8gHXIAIAA&sclient=gws-wiz-serp
    const validateNumber = (e) => {
        const value = parseInt(e.target.value)
        if (value < 1) {
            e.target.value = 1;
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
            <input name="amount" id={"shoppingitem-amount-"+ware} type="number" defaultValue={amount} min="1" onInput={validateNumber}></input>
        </li> 
    )
    }
    else {
        return (
        <li className="shopping-item">
            <input name={ware} id={"shopping-item-"+ware} type="checkbox"></input>
            <label htmlFor={"shopping-item-"+ware} className="ware-label">{ware}</label>
            
            <label htmlFor={"shoppingitem-amount-"+ware}></label>
            <input name="amount" id={"shoppingitem-amount-"+ware} type="number" defaultValue={amount} min="1" onInput={validateNumber}></input>
        </li>
    )
    }
}



