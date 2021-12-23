import { useState } from 'react'
import initialState from '../initialState'

export const useInitialState = () => {
	const [state, setState] = useState(initialState)

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload],
		})
	}

	const removeFromCart = (payload) => {
		const newCart = state.cart
		newCart.splice(payload, 1)
		setState({
			...state,
			cart: newCart,
		})
	}

	const clearCart = () => {
		setState({
			...state,
			cart: [],
		})
	}

	const addBuyer = (payload) => {
		setState({
			...state,
			buyer: [...state.buyer, payload],
		})
	}

	const addOrder = (payload) => {
		setState({
			...state,
			orders: [...state.orders, payload],
		})
	}

	return {
		state,
		addToCart,
		removeFromCart,
		clearCart,
		addBuyer,
		addOrder,
	}
}
