import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.css'

export const Header = () => {
	return (
		<header className='Header'>
			<Link to='/'>
				<h1 className='Header-title'>Minozz</h1>
				<h6>Christmas Shop</h6>
			</Link>
			<div className='Header-checkout'>
				<Link to='/checkout'>Checkout</Link>
			</div>
		</header>
	)
}
