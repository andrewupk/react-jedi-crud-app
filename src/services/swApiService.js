const url = 'https://swapi.dev/api'

export const getPeople = async () => {
    const peopleResponse = await (await fetch(`${url}/people`)).json();
    const people = peopleResponse.results.map(({name, height, mass, gender, birth_year}) => ({
        name, height, mass, gender, birth_year, id: Math.random().toString(36).substr(2, 9)
    }))
    return people;
}

export const getPlanets = async () => {
    const planetsResponse = await (await fetch(`${url}/planets`)).json();

    return  planetsResponse.results.map(({name, climate, terrain, diameter, population, created}) => ({
        name, climate, terrain, diameter, population, created, id: Math.random().toString(36).substr(2, 9)
    }))
}

export const getStarships = async () => {
    const starshipsResponse = await (await fetch(`${url}/starships`)).json();

    return  starshipsResponse.results.map(({name, model, starship_class, manufacturer, MGLT, hyperdrive_rating}) => ({
        name, model, starship_class, manufacturer, MGLT, hyperdrive_rating, id: Math.random().toString(36).substr(2, 9)
    }))
}