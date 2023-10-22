const datasetlink = 'https://restcountries.com/v3.1/all';
fetch(datasetlink)
  .then(response => response.json())
  .then(data => {
    const usDollarCountries = data
      .filter(country => 
        country.currencies && country.currencies.USD && country.currencies.USD.name === 'US Dollar'
      )
      .map(country => country.name); 
usDollarCountries.forEach(countryName => {
      console.log(`Country Name: ${countryName}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
