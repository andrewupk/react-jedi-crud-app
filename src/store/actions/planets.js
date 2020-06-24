export const SET_PLANETS = 'SET_PLANETS';
export const DELETE_PLANET = 'DELETE_PLANET';
export const CREATE_PLANET = 'CREATE_PLANET';

export function setPlanets (planets) {
    return {
        type: SET_PLANETS,
        planets
    };
}

export function deletePlanet (id) {
    return {
        type: DELETE_PLANET,
        id
    }
}

export function createPlanet (planet) {
    return {
        type: CREATE_PLANET,
        planet
    }
}