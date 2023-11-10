import React, { useState, useEffect } from 'react'
import Card from './Card'
import countriesAll from './countriesAll.json'
import useLocalStorage from 'use-local-storage'
import Header from './components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
	const regions = [...new Set(countriesAll.map(country => country.region))]
	const [countries, setCountries] = useState(countriesAll)
	const [regionsFilter, setRegionsFilter] = useState('All regions')
	const [countriesFilter, setCountriesFilter] = useState('')
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	)

	useEffect(() => {
		console.log(countriesFilter)
		setCountries(
			countriesAll.filter(
				country =>
					(regionsFilter === 'All regions' ||
						country.region
							.toLocaleLowerCase()
							.includes(regionsFilter.toLocaleLowerCase())) &&
					(countriesFilter === '' ||
						country.name
							.toLocaleLowerCase()
							.includes(countriesFilter.toLocaleLowerCase()))
			)
		)
	}, [regionsFilter, countriesFilter])

	return (
		<main data-theme={theme} className='main'>
			<Header theme={theme} setTheme={setTheme} />
			<div>
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
                                <option className='option' value={region}>{region}</option>
                                ))}
                        </select>
                    </div>
				</div>
				<div className='card-deck'>
					{countries.map((country, index) => (
						<Card data={country} index={index} />
					))}
				</div>
			</div>
		</main>
	)
}

export default App
