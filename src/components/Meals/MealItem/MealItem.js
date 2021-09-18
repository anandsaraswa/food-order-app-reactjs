import classes  from "../MealItem/MealItem.module.css"
import MealItemForm from "../MealItem/MealItemForm"
import { useContext } from "react"
import CartContext from "../../../statestore/cart-context"

const MealItem = (props) =>{

    const cartCtxt = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtxt.addItem({
            id: props.meal.id,
            name: props.meal.name,
            amount: amount,
            price: props.meal.price

        });
    }

return(
    <li  className={classes.meal}>
        <div>
            <h3>{props.meal.name}</h3>
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>Rs. {props.meal.price}</div>
        </div>
        <div>
            <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler}></MealItemForm>
        </div>
    </li>
);
}

export default MealItem;