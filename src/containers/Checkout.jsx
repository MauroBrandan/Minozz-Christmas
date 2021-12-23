import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Checkout.css'
import { AppContext } from '../context/AppContext'
import { sumTotalCart } from '../utils/sumTotalCart'

export const Checkout = () => {
	const {
		state: { cart },
		removeFromCart,
	} = useContext(AppContext)

	const total = sumTotalCart(cart)

	return (
		<section className='Checkout'>
			<section className='Checkout-content'>
				<h3>{cart.length > 0 ? 'Lista de Pedidos:' : 'No hay productos :('}</h3>
				{cart.map((item, index) => (
					<div className='Checkout-item'>
						<div className='Checkout-element'>
							<h4>{item.title}</h4>
							<span>$ {item.price}</span>
						</div>
						<button type='button' onClick={() => removeFromCart(index)}>
							Eliminar
						</button>
					</div>
				))}
			</section>
			{cart.length > 0 && (
				<aside className='Checkout-sidebar'>
					<h3>Precio Total: $ {total}</h3>
					<Link to='/checkout/information'>
						<button type='button'>Continuar pedido</button>
					</Link>
				</aside>
			)}
		</section>
	)
}
