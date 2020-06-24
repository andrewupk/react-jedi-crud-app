import {SET_PLANETS, DELETE_PLANET, CREATE_PLANET} from '../actions/planets'

const initialState = {
    allPlanets: []
};

function planets (state = initialState, action) {
    switch (action.type) {
        case SET_PLANETS:
            return {
                ...state, 
                allPlanets: action.planets
            }; 
        case DELETE_PLANET:
            const deleted_planets = JSON.parse(localStorage.planets).filter(planet => planet.id != action.id);
            localStorage.setItem('planets', JSON.stringify(deleted_planets));
            return {
                ...state, 
                allPlanets: deleted_planets
            };
        case CREATE_PLANET:
            const added_planets = [...JSON.parse(localStorage.planets), action.planet];
            localStorage.setItem('planets', JSON.stringify(added_planets));
            return {
                ...state,
                allPlanets: added_planets
            };
        default:
            return state;
    }
}

export default planets;