import {SET_STARSHIPS, DELETE_STARSHIP, CREATE_STARSHIP} from '../actions/starships'

const initialState = {
    allStarships: []
};

function starships (state = initialState, action) {
    switch (action.type) {
        case SET_STARSHIPS:
            return {
                ...state, 
                allStarships: action.starships
            }; 
        case DELETE_STARSHIP:
            return {
                ...state, 
                //allPeople: state.allPeople.filter(person => person.id !== action.id)
               /* allStarships: localStorage.setItem('starships', JSON.stringify(
                    JSON.parse(window.localStorage.starships).filter(starship => starship.id !== action.id)
                ))*/
                allStarships: state.allStarships.filter(starship => starship.id != action.id)
            };
        case CREATE_STARSHIP:
            return {
                ...state,
                /*allStarships: localStorage.setItem('starships', 
                    JSON.stringify([...JSON.parse(localStorage.getItem('starships')), action.starship])
                )*/
                allStarships: [...state.allStarships, action.starship]
            };
        default:
            return state;
    }
}

export default starships;