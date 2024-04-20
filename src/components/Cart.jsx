import React, {useState, useEffect} from 'react';

const Cart = () => {
    const [cartList, setCartList] = useState([]);
    const [productList, setProductList] = useState(undefined);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try{
            const response = await fetch(`https://fakestoreapi.com/carts/2`);
            const list = await response.json();
            console.log(list)
            setCartList(list.products);
        }catch(err){
            console.error('Error in fetching the products:', err);
        }
    }

    useEffect(() => {
        async function fetchProductDetails() {
          try {
            const productDetailsPromises = cartList.map(async product => {
              return await fetch(`https://fakestoreapi.com/products/${product.productId}`).then(response => response.json());
            });
            console.log(productDetailsPromises);

            const respObject = await Promise.all(productDetailsPromises);
            console.log(respObject)
            // const productDetails = respObject.map(async resp => {
            //     return await resp.json();
            // })
            // console.log(productDetails)
            // const result = await Promise.all(productDetails);
            // console.log(result)
            setProductList(respObject);
          } catch (error) {
            console.error('Error fetching product details:', error);
          }
        }
        fetchProductDetails();
      }, [cartList]);

  return (
    <div>
        <h1> Product list </h1>
        {/* {cartList.length ? (<table>
            <thead>
                <th>Id</th>
                <th>Action</th>
            </thead>
        {
            cartList.map(product => (
                <tr>
                    <td> {product.productId} </td>
                    <td> <button onClick={(e) => getDetails(e, product.productId)}> view </button> </td>
                </tr>
            ))
        }
        </table>) : 'loading...'} */}
        {
            productList && (
                <ul>
                    <li>{productList.title}</li>
                    <li>{productList.price}</li>
                    <li><img src={productList.image} /> </li>
                </ul>
            )
        }
    </div>
  )
}

export default Cart