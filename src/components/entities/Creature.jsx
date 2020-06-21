import React from 'react';
import Form from '../common/Form';

function Creature ({history, match, location}) {
    const id = match.params.creatureId
    const isNew = id === 'new'
    let creature;
    if (!isNew){
        creature = JSON.parse(localStorage.getItem('people')).filter(item => item.id === id)
    } else {
        creature = [{name: '', height: '', mass: '', gender: '', birth_year: '', id: ''}]
    }

    const handleSaveChanges = (creature) => {
        if (!isNew){
            const unchangedpeople = JSON.parse(localStorage.getItem('people')).filter(item => item.id !== creature.id);
            localStorage.setItem('people', JSON.stringify([...unchangedpeople, creature]))
        } else {
            const people = JSON.parse(localStorage.getItem('people'))
            localStorage.setItem('people', JSON.stringify([...people, creature]))
        }
        history.goBack()        
    }

    return (
        <div className="container">
            <Form 
                columns = {Object.keys(creature[0])}
                initialData = {creature[0]}
                onAddData = {handleSaveChanges}
            />
        </div>
    );
}

export default Creature;