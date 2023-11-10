import React, { useState } from "react";

const Card = (props) => {
  const [classDiv, setClassDiv] = useState(true);
  return (
    <div
      key={props.index}
      // onClick={() => countryDetail(props.data) }
      onClick={() => setClassDiv(!classDiv)}
      className={classDiv ? "card card-body" : "country-detail"}
    >
      <img alt={props.data.name} src={props.data.flag} className="thumbnail" />
      <div className="content">
        <h4 className='country-name'>{props.data.name}</h4>
        <strong>Population: </strong>
        {props.data.population.toLocaleString()}
        <br />
        <strong>Region: </strong>
        {props.data.region}
        <br />
        <strong>Capital: </strong>
        {props.data.capital}
        <br />
      </div>
    </div>
  );
};

// const countryDetail = (data) => {

// }

export default Card;
