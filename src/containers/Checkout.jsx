import React from 'react'
import '../styles/components/Checkout.css'

export const Checkout = () => {
	return (
		<div className='Checkout'>
			<div className='Checkout-content'>
				<h3>Lista de Pedidos:</h3>
				<div className='Checkout-item'>
					<div className='Checkout-element'>
						<h4>ITEM name</h4>
						<span>$55</span>
					</div>
					<button type='button'>Eliminar</button>
				</div>
			</div>
			<div className='Checkout-sidebar'>
				<h3>Precio Total: $10</h3>
				<button type='button'>Continuar pedido</button>
			</div>
		</div>
	)
}
