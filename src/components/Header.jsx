import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.css'
import { AppContext } from '../context/AppContext'

export const Header = () => {
	const { state: { cart } } = useContext(AppContext)
	
	return (
		<header className='Header'>
			<Link to='/' className='Header-title'>
				<h1>Minozz</h1>
				<h6>Christmas Shop</h6>
			</Link>
			<div className='Header-checkout'>
				<Link to='/checkout'>Checkout</Link>
				<span className='Header-alert'>{cart.length}</span>
			</div>
		</header>
	)
}
