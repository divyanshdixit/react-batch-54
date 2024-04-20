import React, { useEffect, useState } from 'react'

const Test = () => {
    const [products, setproducts] = useState([]);
    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const products = await response.json();
        console.log(products);
        setproducts(products.products);
    }
    useEffect(() => {
        getProducts();
    }, [])
  return (
    
    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>TITLE</td>
                <td>Price</td>
            </tr>
        </thead>
        
        {
            products.map(product => {
                return (
                    <tr>
                        <td> {product.id} </td>
                        <td> {product.title} </td>
                        <td> {product.price} </td>
                    </tr>
                )
            })
        }
    </table>
  )
}

export default Test