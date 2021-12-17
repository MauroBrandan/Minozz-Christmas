import React, { useContext } from 'react'
import '../styles/components/Products.css'
import { AppContext } from '../context/AppContext'
import { Product } from './Product'

export const Products = () => {
	const { state: { products } } = useContext(AppContext)

	return (
		<section className='Products'>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</section>
	)
}
