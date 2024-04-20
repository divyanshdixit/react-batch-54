import React, {useState, useEffect} from 'react'

const Sorting = () => {
    const [productsList, setProductsList] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchProducts().then(val => console.log(val));
    }, [sortOrder]);

    const fetchProducts = async () => {
        try{
            const response = await fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`);
            return await response.json();
            // console.log(list)
            // setProductsList(list);
            // return list;
        }catch(err){
            console.error('Error in fetching the products:', err);
        }
    }

    const handleSortingChange = (e) => {
        setSortOrder(e.target.value);
    }

  return (
    <div>
        <h1> Product list </h1>
        <select value={sortOrder} onChange={handleSortingChange}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
        </select>
        {productsList.length ? (<table>
            <thead>
                <th>Title</th>
                <th>Price</th>
            </thead>
        {
            productsList.map(product => (
                <tr>
                    <td> {product.title} </td>
                    <td> {product.price} </td>
                </tr>
            ))
        }
        </table>) : 'loading...'}
    </div>
  )
}

export default Sorting