import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb , getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData()
    
    const [cart , setCart] = useState([])

    useEffect(() =>{

        const storedCare = getShoppingCart()
        const savedCart = []
        for(const id in storedCare){
            const addedProduct = products.find(product => product.id === id)
           if(addedProduct){

            const quantity = storedCare[id]
            addedProduct.quantity = quantity;
              savedCart.push(addedProduct)

           }
        }

        setCart(savedCart)
        
    }, [products])
   

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct)

        let newCart = [] ;

        const exits = cart.find(product => product.id === selectedProduct.id)
        if(!exits){
            selectedProduct.quantity = 1;
            newCart = [...cart , selectedProduct]
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exits.quantity = exits.quantity + 1;
            newCart = [...rest , exits]
        }
        
        setCart(newCart)
        addToDb(selectedProduct.id)
    }



    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product => <Product 
                    
                    key ={product.id}

                    product = {product}
                    handleAddToCart = {handleAddToCart}

                
                ></Product>)
            }
            </div>
            <div className="cart-container">
            <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;