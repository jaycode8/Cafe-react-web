import React from 'react';
import cafeFoods from './foods'
// import FullMenu from './menulist';
import './menulistComponent.css'
import './menulist.css'
import { useCart } from 'react-use-cart';

const FullMenu =(props) =>{
    const {addItemx} = useCart()
    return (
        <div className='cards'>
            <div className='card'>
                <div className='imageBox'>
                    <img src={props.img} alt={props.name}/>    
                </div>
                <div className='cardtext'>
                    <h3>{props.name}</h3>
                    <h3>Ksh.{props.price}</h3>
                    <button onClick={() => addItemx(props.item)}>Purchase</button>
                </div>
            </div>
        </div>
    );
}

const FoodMenu = () => {
    return (
        <div id='foods'>
            <h1>Our Full Menu</h1>
            <section className='jaymoh'>
                <hr/>
                <span className='star'>*</span>
                <hr/>
            </section>
            <section className='fullFoodMenu'>
                {
                    cafeFoods.map((food,index)=>(
                        <FullMenu
                            name={food.name}
                            img={food.img}
                            price={food.price}
                            key={index}
                            item={food}
                        />
                    ))
                }
            </section>
        </div>
        
    );
};

export default FoodMenu;