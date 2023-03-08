import axios from 'axios';
console.log('Hallo daar!');


let countries;

    async function fetchCountries() {
        try {
            const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag,population,topLevelDomain');
            countries = response.data
            console.log(countries)
            sortByPopulation(countries);
            arrayToHtml(countries);
        } catch (e) {
            console.error(e);
        }

    }

    function sortByPopulation() {
        countries.sort((a, b) => {
            return a.population - b.population
        });
    }

    function findRegion(Array) {
        return Array.region;

    }

    function arrayToHtml(Array) {

        const countriesList = document.getElementById('Countries')


        const countryMap = Array.map((country) => {

            return `<li> 
            <a href="https://en.wikipedia.org/wiki/${country.name}" target="_blank">
            <span id="flag-and-text"><img src="${country.flag}" alt="The national flag of ${country.name}" id="flag">
            <p id="${findRegion(country)}">${country.name}</p> 
            </span>
            <p id="population"> Has a population of ${country.population} people</p>
           </a> 
          </li>`
        });
        countriesList.innerHTML = countryMap.join('');
    }

//<p id="${findRegion(country)}">${country.name}</p>
//<p id="${country.region}">${country.name} </p>
    fetchCountries();



