const datasetlink = 'https://restcountries.com/v3.1/all';
fetch(datasetlink)
  .then(response => response.json())
  .then(data => {
    
const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);

    console.log(`Total Population: ${totalPopulation}`);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
