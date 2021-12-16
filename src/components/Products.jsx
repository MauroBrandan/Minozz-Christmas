import React from 'react'
import '../styles/components/Products.css'
import { Product } from './Product'

export const Products = ({ products }) => {
	return (
		<section className='Products'>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</section>
	)
}
