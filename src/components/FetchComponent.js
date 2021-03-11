import React, { useState, useEffect } from 'react';

const FetchComponent = () => {

  const [countries, setCountries] = useState([]);

  const fetchCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => setRace(data))
    .catch(error => console.log("Error: ", error))
  }
  console.log(countries)


  useEffect(() => {
    fetchCountries()
  }, [])

    const results = race.results.map(value => {
    return (
      <div>
        <a href={value.url} target={"blank"}>
          <p> {value.name} </p>
        </a>  
      </div>
    )
  })

  return (
    <>
      <h2> Countries Component </h2>
       {results}
    </>
  )
}

export default FetchComponent

