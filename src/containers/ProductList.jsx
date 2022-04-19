import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/productList.scss';
import useGetProducts from '../hooks/useGetProducts';

const ProductList = () => {

	const API = 'https://api.escuelajs.co/api/v1/products';

	const products = useGetProducts(API);

    return (
        <section className="main-container">
			<div className="ProductList">
				{products && products.map(product => {
					return ( <ProductItem product={product} key={product.id}/> );
				})}
			</div>
		</section>
    );
}

export default ProductList;