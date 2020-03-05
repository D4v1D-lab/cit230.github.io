fetch('https://byui-cit230.github.io/weather/data/towndata.json')
.then( result => {
        return result.json();

    })

    .then(resultJSON =>{
        let towns = resultJSON.towns;
        console.log(towns);

        towns.forEach(
            town => {
                if (town.name === 'Fish Haven'){
                    document.querySelector("#fishHavenName").textContent = town.name;
                    document.querySelector("#fishHavenMotto").textContent = town.motto;
                    document.querySelector("#fishHavenYearFounded").textContent = `Year Founded: ${town.yearFounded}`;
                    document.querySelector("#fishHavenPopulation").textContent = `Population: ${town.currentPopulation}`;
                    document.querySelector("#fishHavenAnnualRainfall").textContent = `Annual Rainfall: ${town.averageRainfall}`;
                    document.querySelector("#fishHavenImage").setAttribute('src', `images/${town.photo}`);
                    document.querySelector("#fishHavenImage").setAttribute('alt', `images/${town.name}`);
                } else if (town.name === 'Preston') {
                    document.querySelector("#fishPrestonName").textContent = town.name;
                    document.querySelector("#fishPrestonMotto").textContent = town.motto;
                    document.querySelector("#fishPrestonYearFounded").textContent = `Year Founded: ${town.yearFounded}`;
                    document.querySelector("#fishPrestonPopulation").textContent = `Population: ${town.currentPopulation}`;
                    document.querySelector("#fishPrestonAnnualRainfall").textContent = `Annual Rainfall: ${town.averageRainfall}`;
                    document.querySelector("#fishPrestonImage").setAttribute('src', `images/${town.photo}`);
                    document.querySelector("#fishPrestonImage").setAttribute('alt', `images/${town.name}`);

                } else if (town.name === 'Soda Springs') {
                    document.querySelector("#fishSpringsName").textContent = town.name;
                    document.querySelector("#fishSpringsMotto").textContent = town.motto;
                    document.querySelector("#fishSpringsYearFounded").textContent = `Year Founded: ${town.yearFounded}`;
                    document.querySelector("#fishSpringsPopulation").textContent = `Population: ${town.currentPopulation}`;
                    document.querySelector("#fishSpringsAnnualRainfall").textContent = `Annual Rainfall: ${town.averageRainfall}`;
                    document.querySelector("#fishSpringsImage").setAttribute('src', `images/${town.photo}`);
                    document.querySelector("#fishSpringsImage").setAttribute('alt', `images/${town.name}`);
            }
        }

        );

    })