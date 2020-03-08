fetch('https://byui-cit230.github.io/weather/data/towndata.json')
.then(result => {
    return result.json();
})
.then(resultJSON => {
    let towns = resultJSON.towns;

    towns.forEach(
        town => {
            if(town.name === 'Fish Haven') {
             document.querySelector('#fishHavenName').textContent = town.name;
             document.querySelector('#fishHavenMotto').textContent = town.motto;
             document.querySelector('#fishHavenYearFounded').textContent = `Year Founded: ${town.yearFounded}`;
             document.querySelector('#fishHavenPopulation').textContent = `Population: ${town.currentPopulation}`;
             document.querySelector('#fishHavenAnnualRainfall').textContent = `Annual Rainfall: ${town.averageRainfall}`;
             document.querySelector('#fishHavenImage').setAttribute('src', `images/${town.photo}`);
             document.querySelector('#fishHavenImage').setAttribute('alt', town.name);
             
             } else if (town.name === 'Preston'){
                document.querySelector('#prestonName').textContent = town.name;
                document.querySelector('#prestonMotto').textContent = town.motto;
                document.querySelector('#prestonYearFounded').textContent = `Year Founded: ${town.yearFounded}`;
                document.querySelector('#prestonPopulation').textContent = `Population: ${town.currentPopulation}`;
                document.querySelector('#prestonAnnualRainfall').textContent = `Annual Rainfall: ${town.averageRainfall}`;
                document.querySelector('#prestonImage').setAttribute('src', `images/${town.photo}`);
                document.querySelector('#prestonImage').setAttribute('alt', town.name);
                

              } else if (town.name === 'Soda Springs') {
                document.querySelector('#sodaSpringsName').textContent = town.name;
                document.querySelector('#sodaSpringsMotto').textContent = town.motto;
                document.querySelector('#sodaSpringsYearFounded').textContent = `Year Founded: ${town.yearFounded}`;
                document.querySelector('#sodaSpringsPopulation').textContent = `Population: ${town.currentPopulation}`;
                document.querySelector('#sodaSpringsAnnualRainfall').textContent = `Annual Rainfall: ${town.averageRainfall}`;
                document.querySelector('#sodaSpringsImage').setAttribute('src', `images/${town.photo}`);
                document.querySelector('#sodaSpringsImage').setAttribute('alt', town.name);
                
              }
            }
        
    );
})

    

   