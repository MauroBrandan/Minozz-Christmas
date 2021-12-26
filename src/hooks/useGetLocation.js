import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGetLocation = (buyer) => {
	const API_KEY = process.env.POSITION_STACK_API_KEY
	const API = 'http://api.positionstack.com/v1/forward'
	const { address, city, number, state } = buyer
	const [location, setLocation] = useState([])

	const params = {
		access_key: API_KEY,
		query: `${number} ${address} - ${city}`,
		region: state,
		limit: 1,
	}

	useEffect(async () => {
		const response = await axios.get(API, { params })
		setLocation(response.data.data[0])
	}, [])

	return location
}
