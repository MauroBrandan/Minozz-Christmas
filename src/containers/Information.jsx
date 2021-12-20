import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/components/Information.css'
import { AppContext } from '../context/AppContext'

export const Information = () => {
	const navigate = useNavigate()
	const {
		state: { cart },
		addBuyer,
	} = useContext(AppContext)

	const form = useRef(null)

	const handleSubmit = () => {
		const formData = new FormData(form.current)
		const buyer = Object.fromEntries(formData)
		addBuyer(buyer)
		navigate('/checkout/payment')
	}

	return (
		<section className='Information'>
			<section className='Information-content'>
				<h2>Información de contacto:</h2>
				<div className='Information-form'>
					<form ref={form}>
						<input type='text' placeholder='Nombre completo' name='name' />
						<input type='text' placeholder='Correo Electronico' name='email' />
						<input type='text' placeholder='Direccion' name='address' />
						<input type='text' placeholder='Ciudad' name='city' />
						<input type='text' placeholder='Pais' name='country' />
						<input type='text' placeholder='Provincia' name='state' />
						<input type='text' placeholder='Codigo postal' name='cp' />
						<input type='text' placeholder='Telefono' name='phone' />
					</form>
				</div>
				<div className='Information-buttons'>
					<Link to='/checkout'>
						<button className='Information-back'>Regresar</button>
					</Link>
					<button className='Information-next' onClick={handleSubmit}>
						Pagar
					</button>
				</div>
			</section>
			<aside className='Information-sidebar'>
				<h3>Pedido:</h3>
				{cart.map((item) => (
					<div className='Information-item'>
						<div className='Information-element'>
							<h4>{item.title}</h4>
							<span>$ {item.price}</span>
						</div>
					</div>
				))}
			</aside>
		</section>
	)
}
