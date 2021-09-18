import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon"
import classes from "../Layout/HeaderCart.module.css"

import CartContext  from "../../statestore/cart-context"

const HeaderCart = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtxt = useContext(CartContext);
    const { items } = cartCtxt;
    const numberOfCartItems = cartCtxt.items.reduce((curNumber,item)=>{
        return curNumber+item.amount
    },0)
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    useEffect(()=>{
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true)
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
          }, 300);

        return () => {
        clearTimeout(timer);
        };     

    },[items])

    return (<button className={btnClasses} onClick={props.onTap}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
    );
} ;
export default HeaderCart;