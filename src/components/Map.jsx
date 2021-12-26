import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export const Map = ({ location }) => {
	const API_KEY = process.env.GOOGLE_MAPS_API_KEY

	const mapStyles = {
		height: '50vh',
		width: '100%',
	}

	const defaultCenter = {
		lat: -27.345983,
		lng: -65.592707,
	}

	const position = {
		lat: location ? location.latitude : defaultCenter.lat,
		lng: location ? location.longitude : defaultCenter.lng,
	}

	return (
		<LoadScript googleMapsApiKey={API_KEY}>
			<GoogleMap mapContainerStyle={mapStyles} zoom={17} center={position}>
				<Marker position={position} />
			</GoogleMap>
		</LoadScript>
	)
}
