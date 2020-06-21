import React from 'react';
import Form from '../common/Form';

function Planet ({history, match, location}) {
    const id = match.params.planetId
    const isNew = id === 'new'
    let planet;
    if (!isNew){
        planet = JSON.parse(localStorage.getItem('planets')).filter(item => item.id === id)
    } else {
        planet = [{name: '', climate: '', terrain: '', diameter: '', population: '', created: '', id: ''}]
    }

    const handleSaveChanges = (planet) => {
        if (!isNew){
            const unchangedplanets = JSON.parse(localStorage.getItem('planets')).filter(item => item.id !== planet.id);
            localStorage.setItem('planets', JSON.stringify([...unchangedplanets, planet]))
        } else {
            const planets = JSON.parse(localStorage.getItem('planets'))
            localStorage.setItem('planets', JSON.stringify([...planets, planet]))
        }
        history.goBack()        
    }

    return (
        <div className="container">
            <Form 
                columns = {Object.keys(planet[0])}
                initialData = {planet[0]}
                onAddData = {handleSaveChanges}
            />
        </div>
    );
}

export default Planet;