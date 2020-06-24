import {SET_PEOPLE, DELETE_PERSON, CREATE_PERSON} from '../actions/people'

const initialState = {
    allPeople: []
};

function people (state = initialState, action) {
    switch (action.type) {
        case SET_PEOPLE:
            return {
                ...state, 
                allPeople: action.people
            }; 
        case DELETE_PERSON:
            return {
                ...state, 
                //allPeople: state.allPeople.filter(person => person.id !== action.id)
                /*allPeople: localStorage.setItem('people', JSON.stringify(
                    JSON.parse(window.localStorage.people).filter(person => person.id !== action.id)
                ))*/
                allPeople: state.allPeople.filter(person => person.id != action.id)
            };
        case CREATE_PERSON:
            return {
                ...state,
                /*allPeople: localStorage.setItem('people', 
                    JSON.stringify([...JSON.parse(localStorage.getItem('people')), action.person])
                )*/
                allPeople: [...state.allPeople, action.person]
            };
        default:
            return state;
    }
}

export default people;