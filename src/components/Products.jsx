import React, { useEffect, useState } from 'react'
import '../style.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [item, setItem] = useState({
        id: null,
        title: '',
        price: null,
    })
    const getProducts = async () => {
        try{
            const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
            const allProducts = await response.json();
            console.log(allProducts);
            setProducts(allProducts.products)
        }catch(err){
            console.log('getting error in fetching', err)
        }
    }
    useEffect(() => {
        getProducts();
    }, [])

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: [e.target.value]
        })
    }
    
    const addItem = () => {
        setProducts([...products, item]);
        setItem({
            id: '',
            title: '',
            price: ''
        })
    }
  return (
    <>
    {
        products && products.map(item => {
            return (
                <div className='products'>
                    <h1>{item.id }</h1>
                    <p> {item.title }</p>
                    <p> {item.price }</p>
                </div>
            )
        })
    }

    <form>
        <input type='text' placeholder='id' name='id' value={item.id} onChange={handleChange} />
        <input type='text' placeholder='title' name='title' value={item.title} onChange={handleChange} />
        <input type='text' placeholder='price' name='price' value={item.price} onChange={handleChange} />
        <button type='button' onClick={addItem}> add </button>
    </form>
    </>
  )
}

export default Products