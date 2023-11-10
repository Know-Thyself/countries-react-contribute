import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const Home = ({ allCountries, setCountryDetail }) => {
	const regions = [...new Set(allCountries.map(country => country.region))]
	const [countries, setCountries] = useState(allCountries)
	const [regionsFilter, setRegionsFilter] = useState('All regions')
	const [countriesFilter, setCountriesFilter] = useState('')

	useEffect(() => {
		setCountries(
			allCountries.filter(
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
						<option className='option'>Filter by Region</option>
						{regions.map(region => (
							<option className='option' value={region}>
								{region}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className='country-cards-container'>
				{countries.map((country, index) => (
					<Card
						data={country}
						index={index}
						setCountryDetail={setCountryDetail}
					/>
				))}
			</div>
		</div>
	)
}

export default Home
