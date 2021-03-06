import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppProvider } from '../context/AppContext.js'
import { Layout } from '../components/Layout.jsx'
import { Home } from '../containers/Home.jsx'
import { Checkout } from '../containers/Checkout.jsx'
import { Information } from '../containers/Information.jsx'
import { Payment } from '../containers/Payment.jsx'
import { Success } from '../containers/Success.jsx'
import { NotFound } from '../containers/NotFound.jsx'

export const App = () => {
	return (
		<AppProvider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/checkout/information' element={<Information />} />
						<Route path='/checkout/payment' element={<Payment />} />
						<Route path='/checkout/success' element={<Success />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppProvider>
	)
}
