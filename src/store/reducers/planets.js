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
            return {
                ...state, 
                //allPeople: state.allPeople.filter(person => person.id !== action.id)
                /*allPlanets: localStorage.setItem('planets', JSON.stringify(
                    JSON.parse(window.localStorage.planets).filter(planet => planet.id !== action.id)
                ))*/
                allPlanets: state.allPlanets.filter(planet => planet.id != action.id)
            };
        case CREATE_PLANET:
            return {
                ...state,
                /*allPlanets: localStorage.setItem('planets', 
                    JSON.stringify([...JSON.parse(localStorage.getItem('planets')), action.planet])
                )*/
                allPlanets: [...state.allPlanets, action.planet]
            };
        default:
            return state;
    }
}

export default planets;