import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import allCountries from './allCountries.json'
import Home from './pages/Home'
import Details from './pages/Details'
import useLocalStorage from 'use-local-storage'
import Header from './components/Header'
import './App.css'

function App() {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
	const [countryDetail, setCountryDetail] = useState({})
	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	)

	return (
		<main data-theme={theme} className='main'>
			<Header theme={theme} setTheme={setTheme} />
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<Home
								theme={theme}
								setCountryDetail={setCountryDetail}
								allCountries={allCountries}
							/>
						}
					/>
					<Route
						exact
						path='/details'
						element={
							<Details
								countryDetail={countryDetail}
								setCountryDetail={setCountryDetail}
								allCountries={allCountries}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</main>
	)
}

export default App
