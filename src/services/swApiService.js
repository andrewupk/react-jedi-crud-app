const url = 'https://swapi.dev/api'

export const getPeople = async () => {
    
    if (localStorage.people === undefined){
        const peopleResponse = await (await fetch(`${url}/people`)).json();
        const people = peopleResponse.results.map(({name, height, mass, gender, birth_year}) => ({
            name, height, mass, gender, birth_year, id: Math.random().toString(36).substr(2, 9)
        }))
        localStorage.setItem('people', JSON.stringify(people));
    }
    return JSON.parse(localStorage.people);
}

export const getPlanets = async () => {
    if (localStorage.planets === undefined){
        const planetsResponse = await (await fetch(`${url}/planets`)).json();
        const planets = planetsResponse.results.map(({name, climate, terrain, diameter, population, created}) => ({
            name, climate, terrain, diameter, population, created, id: Math.random().toString(36).substr(2, 9)
        }))
        localStorage.setItem('planets', JSON.stringify(planets))
    }
    return JSON.parse(localStorage.planets);
}

export const getStarships = async () => {
    if (localStorage.starships === undefined){
        const starshipsResponse = await (await fetch(`${url}/starships`)).json();
        const starships = starshipsResponse.results.map(({name, model, starship_class, manufacturer, MGLT, hyperdrive_rating}) => ({
            name, model, starship_class, manufacturer, MGLT, hyperdrive_rating, id: Math.random().toString(36).substr(2, 9)
        }))
        localStorage.setItem('starships', JSON.stringify(starships));
    }
    return JSON.parse(localStorage.starships);
}