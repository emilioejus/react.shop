import React, {useState, useEffect} from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/productList.scss';
import axios from 'axios';

const ProductList = () => {

const API = 'https://api.escuelajs.co/api/v1/products';

const [products, setProducts] = useState([]);
useEffect(()=> {
	async function fetchData() {
		const response = await axios(API)
		setProducts(response.data)
	}; 
	fetchData();
}, []);

    return (
        <section className="main-container">
			<div className="ProductList">
				{products.map(product => {
					return ( <ProductItem key={product.id}/> );
				})}
			</div>
		</section>
    );
}

export default ProductList;