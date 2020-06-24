import React from 'react';
import Form from '../common/Form';
import { useDispatch } from 'react-redux';
import { createStarship } from '../../store/actions/starships';

function Starship ({history, match, location}) {
    const dispatch = useDispatch();

    const id = match.params.starshipId
    const isNew = id === 'new'
    let starship;
    if (!isNew){
        starship = JSON.parse(localStorage.getItem('starships')).filter(item => item.id === id)
    } else {
        starship = [{name: '', model: '', starship_class: '', manufacturer: '', MGLT: '', hyperdrive_rating: '', id: ''}]
    }
    const handleSaveChanges = (starship) => {
        if (!isNew){
            const unchangedstarships = JSON.parse(localStorage.getItem('starships')).filter(item => item.id !== starship.id);
            localStorage.setItem('starships', JSON.stringify([...unchangedstarships, starship]))
        } else {
            dispatch(createStarship(starship))
        }
        history.goBack()        
    }

    let errors = {name: true, MGLT: true}
    const validate = (starship) => {
        errors.name = starship.name.length > 0;
        errors.MGLT = /^\d+$/gm.test(starship.MGLT);
        const result = errors.name && errors.MGLT;
        return result;
    }

    return (
        <div className="container">
            <Form 
                columns = {Object.keys(starship[0])}
                initialData = {starship[0]}
                onAddData = {handleSaveChanges}
                onValidate = {validate}
                errors = {errors}
            />
        </div>
    );
}

export default Starship;