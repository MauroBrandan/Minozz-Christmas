import { useState, useEffect } from 'react'

export const useGetLocation = () => {
	const [location, setLocation] = useState([])

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLocation(position.coords)
			},
			(error) => {
				console.log(error)
				setLocation(false)
			},
			{
				enableHighAccuracy: true,
			}
		)
	}, [])

	return location
}
