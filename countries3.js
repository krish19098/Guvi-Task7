const dataset = 'https://restcountries.com/v3.1/all';

fetch(dataset)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
        console.log(`Country Name: ${country.name}`);
        console.log(`Capital: ${country.capital}`);
        console.log(`Flag: ${country.flag}`);
        console.log("\n"); 
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
