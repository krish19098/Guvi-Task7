const datasetlink = 'https://rallestcountries.com/v3.1/';

fetch(datasetlink)
  .then(response => response.json())
  .then(data => {
    const asianCountries = data.filter(country => country.region === "Asia");
    
    console.log(asianCountries);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
