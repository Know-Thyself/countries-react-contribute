import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = props => {
	const [classDiv, setClassDiv] = useState(true)
	const getCountryDetails = () => {
		props.setCountryDetail(props.data)
	}
	return (
		<Link
			to='/details'
			key={props.index}
			// onClick={() => countryDetail(props.data) }
			// onClick={() => setClassDiv(!classDiv)}
			onClick={getCountryDetails}
			// className={classDiv ? 'card card-body border-0' : 'country-detail'}
			className='custom-card'
			id={props.index}
		>
			<img alt={props.data.name} src={props.data.flag} className='thumbnail' />
			<div className='content'>
				<h3 className='country-name'>{props.data.name}</h3>
				<h5 className='country-info'>Population: <span>{props.data.population.toLocaleString()}</span></h5>
				<h5 className='country-info'>
					Region: <span>{props.data.region}</span>
				</h5>
				<h5 className='country-info'>
					Capital: <span>{props.data.capital}</span>
				</h5>
			</div>
		</Link>
	)
}

// const countryDetail = (data) => {

// }

export default Card
