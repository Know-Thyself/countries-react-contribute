import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
						element={<Home theme={theme} setCountryDetail={setCountryDetail} />}
					/>
					<Route
						exact
						path='/details'
						element={
							<Details
								countryDetail={countryDetail}
								setCountryDetail={setCountryDetail}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
			{/* <div>
				<div className='inputs-wrapper'>
					<div className='search-container'>
						<FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
						<input
							id='input'
							className='search-bar'
							type='search'
							placeholder='Search for a country...'
							onChange={e => setCountriesFilter(e.target.value)}
						/>
					</div>

					<div className='select-wrapper'>
						<select
							id='select'
							onChange={e => setRegionsFilter(e.target.value)}
							className='select'
						>
							<option className='option'>All regions</option>
							{regions.map(region => (
								<option className='option' value={region}>
									{region}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className='card-deck'>
					{countries.map((country, index) => (
						<Card data={country} index={index} />
					))}
				</div>
			</div> */}
		</main>
	)
}

export default App
