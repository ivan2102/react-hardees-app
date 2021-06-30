import React from 'react';
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartContext = useContext(CartContext);

     const { items } = cartContext;

    const numberOfCartItems = items.reduce((currNumber, item) => {

        return currNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ?  classes.bump : ''}`;

    useEffect(() => {
     if(items.length === 0) {

         return;
     }
       setBtnIsHighlighted(true);

     const timer =  setTimeout(() => {

           setBtnIsHighlighted(false);
       }, 300);

       return () => {

           clearTimeout(timer);
       }

    }, [items]);

    return(
        <button className={ btnClasses } onClick={props.onClick}>
        <span className="shopping-cart">
        <i className="fas fa-shopping-cart"></i>
        </span>

        <span>Order now</span>

        <span className={classes.badge}>
         {numberOfCartItems}
        </span>

        </button>
    )
}

export default HeaderCartButton;