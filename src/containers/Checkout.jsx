import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Checkout.css'

export const Checkout = () => {
	return (
		<section className='Checkout'>
			<section className='Checkout-content'>
				<h3>Lista de Pedidos:</h3>
				<div className='Checkout-item'>
					<div className='Checkout-element'>
						<h4>ITEM name</h4>
						<span>$55</span>
					</div>
					<button type='button'>Eliminar</button>
				</div>
			</section>
			<aside className='Checkout-sidebar'>
				<h3>Precio Total: $10</h3>
				<Link to='/checkout/information'>
					<button type='button'>Continuar pedido</button>
				</Link>
			</aside>
		</section>
	)
}
