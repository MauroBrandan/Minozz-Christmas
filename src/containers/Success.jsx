import React, { useContext } from 'react'
import '../styles/components/Success.css'
import { AppContext } from '../context/AppContext'
import { useGetLocation } from '../hooks/useGetLocation'
import { Map } from '../components/Map'

export const Success = () => {
	const { state } = useContext(AppContext)
	const { buyer } = state
	const name = buyer[0] ? buyer[0].name : 'Timoteo'
	const location = buyer[0] ? useGetLocation() : false
	return (
		<div className='Success'>
			<div className='Success-content'>
				<h2>{name}, gracias por tu compra</h2>
				<span>Tu pedido llegara en 5 dias a tu dirección:</span>
				<div className='Success-map'>
					<Map location={location} />
				</div>
			</div>
		</div>
	)
}
