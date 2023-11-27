import Modal from './UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import { currencyFormatter } from '../util/formatting';
import Input from './UI/Input.jsx';
import Button from './UI/Button.jsx';
import { useContext } from 'react';

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price
    }, 0);

    const handleClose = () => {
        userProgressCtx.hideCheckout();
    }

    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label="Full Name" type="text" id="full-name"></Input>
            <Input label="E-Mail Address" type="email" id="email"></Input>
            <Input label="Street" type="text" id="street"></Input>
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"></Input>
                <Input label="City" type="text" id="city"></Input>
            </div>

            <p className="modal-actions">
                <Button type="button" textOnly onClick={handleClose}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
}