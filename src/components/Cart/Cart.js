import classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart = (props) => {
	const cartItems = (
		<ul className={classes['cart-items']}>
			{[ { id: 'c1', name: 'VadaPav', amount: 2, price: 12 } ].map((item) => <li>{item.name}</li>)}
		</ul>
	);
	return (
		<Modal onClose={props.onHideCart}>
			{cartItems}
			<div className={classes.actions}>
				<span>Total Amount</span>
				<span>24.00</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onHideCart}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
