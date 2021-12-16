import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Information.css'

export const Information = () => {
	return (
		<section className='Information'>
			<section className='Information-content'>
				<h2>Información de contacto:</h2>
				<div className='Information-form'>
					<form action=''>
						<input type='text' placeholder='Nombre completo' name='name' />
						<input type='text' placeholder='Correo Electronico' name='email' />
						<input type='text' placeholder='Direccion' name='addres' />
						<input type='text' placeholder='Ciudad' name='city' />
						<input type='text' placeholder='Pais' name='country' />
						<input type='text' placeholder='Estado' name='state' />
						<input type='text' placeholder='Codigo postal' name='cp' />
						<input type='text' placeholder='Telefono' name='phone' />
					</form>
				</div>
				<div className='Information-buttons'>
					<Link to='/checkout'>
						<button className='Information-back'>Regresar</button>
					</Link>
					<Link to='/checkout/payment'>
						<button className='Information-next'>Pagar</button>
					</Link>
				</div>
			</section>
			<aside className='Information-sidebar'>
				<h3>Pedido:</h3>
				<div className='Information-item'>
					<div className='Information-element'>
						<h4>ITEM Name</h4>
						<span>$10</span>
					</div>
				</div>
			</aside>
		</section>
	)
}
