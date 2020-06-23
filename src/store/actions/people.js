export const SET_PEOPLE = 'SET_PEOPLE';
export const DELETE_PERSON = 'DELETE_PERSON';
export const CREATE_PERSON = 'CREATE_PERSON';

export function setPeople (people) {
    return {
        type: SET_PEOPLE,
        people
    };
}

export function deletePerson (id) {
    return {
        type: DELETE_PERSON,
        id
    }
}

export function createPerson (person) {
    return {
        type: CREATE_PERSON,
        person
    }
}