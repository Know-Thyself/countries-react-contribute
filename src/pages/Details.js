import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Details = ({ countryDetail, setCountryDetail }) => {
	console.log(countryDetail)
	return (
		<main className='details-main'>
			<Link to={'/'} className='back-btn'>
				<FontAwesomeIcon icon={faArrowLeft} /> Back
			</Link>
			<div className='country-wrapper'>
				<img
					alt={countryDetail.name}
					src={countryDetail.flag}
				/>
			</div>
			<h1>{countryDetail.name}</h1>
		</main>
	)
}

export default Details
