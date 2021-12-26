import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'
import '../styles/components/Payment.css'
import { AppContext } from '../context/AppContext'
import { sumTotalCart } from '../utils/sumTotalCart'

export const Payment = () => {
	const navigate = useNavigate()
	const { state, addOrder, clearCart } = useContext(AppContext)
	const { cart, buyer } = state

	const paypalOptions = {
		clientId: 'sb',
		intent: 'capture',
		currency: 'USD',
	}

	const handlePaymentSuccess = (data) => {
		const newOrder = {
			buyer,
			product: cart,
			payment: data,
		}
		addOrder(newOrder)
		navigate('/checkout/success')
		clearCart()
	}

	const totalCart = sumTotalCart(cart)

	return (
		<div className='Payment'>
			<div className='Payment-content'>
				<h3>Resumen del pedido:</h3>
				<h5>Total: {totalCart}</h5>
				<div className='Payment-button'>
					<PayPalButton
						options={paypalOptions}
						amount={totalCart}
						onSuccess={(data) => handlePaymentSuccess(data)}
						onCancel={(data) => console.log(data)}
						onError={(error) => console.log(error)}
					/>
				</div>
			</div>
		</div>
	)
}
