import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Details = ({ countryDetail, setCountryDetail, allCountries }) => {
	const languages = countryDetail.languages.map(language => language.name)
	const getBorderCountry = e => {
		const borderCountry = allCountries.filter(
			country => country.alpha3Code === e.target.innerText
		)
		setCountryDetail(borderCountry[0])
	}
	return (
		<main className='details-main'>
			<Link to={'/'} className='back-btn'>
				<FontAwesomeIcon icon={faArrowLeft} /> Back
			</Link>
			<div className='country-details-wrapper'>
				<img alt={countryDetail.name} src={countryDetail.flag} />
				<div className='detailed-country-info'>
					<div className='country-info-container'>
						<div className='main-info'>
							<h3 className='country-name'>{countryDetail.name}</h3>
							<p>
								Native Name: <span>{countryDetail.nativeName}</span>
							</p>
							<p>
								Population: <span>{countryDetail.population}</span>
							</p>
							<p>
								Region: <span>{countryDetail.region}</span>
							</p>
							<p>
								Sub Region: <span>{countryDetail.subregion}</span>
							</p>
							<p>
								Capital: <span>{countryDetail.capital}</span>
							</p>
						</div>
						<div className='sub-info'>
							<p>
								Top Level Domain:{' '}
								<span>{countryDetail.topLevelDomain.join(', ')}</span>
							</p>
							<p>
								Currencies:{' '}
								<span>
									{countryDetail.currencies[0].name.split(' ').join(', ')}
								</span>
							</p>
							<p>
								Languages: <span>{languages.join(', ')}</span>
							</p>
						</div>
					</div>
					<div className='border-countries'>
						<p>Border Countries:</p>
						{countryDetail.borders &&
							countryDetail.borders.map(country => (
								<span onClick={getBorderCountry} className='country-btn'>
									{country}
								</span>
							))}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Details
