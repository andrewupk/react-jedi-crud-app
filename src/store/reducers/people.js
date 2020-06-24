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
            const deleted_people = JSON.parse(localStorage.people).filter(person => person.id != action.id);
            localStorage.setItem('people', JSON.stringify(deleted_people));
            return {
                ...state, 
                allPeople: deleted_people
            };
        case CREATE_PERSON:
            const added_people = [...JSON.parse(localStorage.people), action.person];
            localStorage.setItem('people', JSON.stringify(added_people));
            return {
                ...state,
                allPeople: added_people
            };
        default:
            return state;
    }
}

export default people;