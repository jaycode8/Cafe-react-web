import React from 'react';
import './menulist.css'
import {useCart} from 'react-use-cart'

function FullMenu (props) {
    const {addItem} = useCart()
    return (
        <div className='cards'>
            <div className='card'>
                <div className='imageBox'>
                    <img src={props.img} alt={props.name}/>    
                </div>
                <div className='cardtext'>
                    <h3>{props.name}</h3>
                    <h3>Ksh.{props.price}</h3>
                    <button onClick={( ) => addItem(props.item)}>ORDER</button>
                </div>
            </div>
        </div>
    );
}

export default FullMenu;