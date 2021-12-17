import { useState } from 'react'
import initialState from '../initialState'

export const useInitialState = () => {
	const [state, setstate] = useState(initialState)

	const addToCart = (payload) => {
		setstate({
			...state,
			cart: [...state.cart, payload],
		})
	}

	const removeFromCart = (payload) => {
		setstate({
			...state,
			cart: state.cart.filter((item) => item.id !== payload.id),
		})
	}

	return {
		state,
		addToCart,
		removeFromCart,
	}
}
