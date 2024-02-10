import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order Summarry</h4>
            <p>Seleted Items :{cart.length}</p> 

        </div>
    );
};

export default Cart;