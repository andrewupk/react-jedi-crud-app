import React, { useState, useEffect } from 'react';
import Table from "./components/common/Table";
import { getPeople } from './services/swApiService';
import Button from './components/common/Button';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPeople, deletePerson } from './store/actions/people';
import { getAllPeople } from './store/selectors/people';

// import './App.css';

const columns = ['name', 'height', 'mass', 'gender', 'birth_year', 'id'];

function People() {
    //const [people, setPeople] = useState([]);
    const dispatch = useDispatch();
    const people = useSelector(state => getAllPeople(state));

    useEffect(() => {
        const getData = async () => {
            if (localStorage.people === undefined){
                const data = await getPeople()
                localStorage.setItem('people', JSON.stringify(data))
                //setPeople(data)
                dispatch(setPeople(data));
            } else {
                //setPeople(JSON.parse(localStorage.getItem('people')))
                dispatch(setPeople(JSON.parse(localStorage.getItem('people'))));
            }
        }
        
        getData()        
    }, []);

    const deleteRow = (item) => {
        /*console.log('Deleting....', item);
        const localpeople = JSON.parse(localStorage.people);
        const data = localpeople.filter(person => person.id !== item.id)
        localStorage.setItem('people', JSON.stringify(data))*/
        //setPeople(data)
        dispatch(deletePerson(item.id))
    }

    return (
        <div className="container">
            <div className="page-header text-center">
                <h1>People</h1>
            </div>
            <Link to="/people/new">
                <Button
                    label="New creature"
                    classes="btn btn-info"
                    disabled={false}
                />
            </Link>
            <Table
                data={people && Object.values(people)}
                columns={columns}
                tableDescriptor="People"
                deleteHandler={deleteRow}
            />
        </div>
    );
}

export default People;
