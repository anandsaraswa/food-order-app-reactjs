import classes from "../Cart/CartItems.module.css";
import Model from "../UI/Model";
import CartContext from "../../statestore/cart-context";
import { useContext } from "react";
import CartList from "../Cart/CartList";

const CartItems = (props) => {
  const cartCtxt = useContext(CartContext);

  const totalAmount = cartCtxt.totalAmount;

  const removeItemHandler = (id) => {
    cartCtxt.removeItem(id)
  };

  const addItemHandler = (item) => {
    cartCtxt.addItem({...item, amount: 1})
  };

  const cartitems = (
    <ul className={classes['cart-items']}>
      {cartCtxt.items.map((item) => (
        <CartList
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Model onClose={props.onHideCart}>
      {cartitems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        {cartCtxt.items.length > 0 && (
          <button className={classes["button"]}> Order </button>
        )}
      </div>
    </Model>
  );
};

export default CartItems;
