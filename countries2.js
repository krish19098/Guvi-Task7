const datasetlink = 'https://rallestcountries.com/v3.1/';
fetch(datasetlink)
  .then(response => response.json())
  .then(data => {
    const smallPopulationCountries = data.filter(country => country.population < 200000);

    console.log(smallPopulationCountries);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
