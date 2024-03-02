import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const porducts = useLoaderData()
    return (
        <div>
            <h2>This is orders: {porducts.length}</h2>
        </div>
    );
};

export default Orders;