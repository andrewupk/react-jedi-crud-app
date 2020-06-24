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
            const deleted_starships = JSON.parse(localStorage.starships).filter(starship => starship.id != action.id);
            localStorage.setItem('starships', JSON.stringify(deleted_starships));
            return {
                ...state, 
                allStarships: deleted_starships
            };
        case CREATE_STARSHIP:
            const added_starships = [...JSON.parse(localStorage.starships), action.starship];
            localStorage.setItem('starships', JSON.stringify(added_starships));
            return {
                ...state,
                allStarships: added_starships
            };
        default:
            return state;
    }
}

export default starships;