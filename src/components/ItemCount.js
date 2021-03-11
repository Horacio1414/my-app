import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd})=> {

    
    
    return (
        <form>
            Stock: {stock}
            <br />
            <input type ="number" placeholder={initial} ></input>
            <br />
            <button onClick = {(e) => onAdd(e,1)}>Agregar carrito</button>

        </form>


        
    )
}

export default ItemCount;