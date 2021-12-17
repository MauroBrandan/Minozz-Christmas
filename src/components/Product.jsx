import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Product = ({ product }) => {
	const { addToCart } = useContext(AppContext)
	const { image, title, price, description } = product

	return (
		<article className='Products-item'>
			<img src={image} alt={title} />
			<div className='Products-item-info'>
				<h2>
					{title}
					<span>$ {price}</span>
				</h2>
				<p>{description}</p>
			</div>
			<button type='button' onClick={() => addToCart(product)}>
				Comprar
			</button>
		</article>
	)
}
