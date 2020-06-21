import React, { useState, useEffect } from 'react';
import Table from "./components/common/Table";
import { getPeople } from './services/swApiService';
import Button from './components/common/Button';
import {Link} from 'react-router-dom';

// import './App.css';

const columns = ['name', 'height', 'mass', 'gender', 'birth_year', 'id'];

function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const getData = async () => {
            if (localStorage.people === undefined){
                const data = await getPeople()
                localStorage.setItem('people', JSON.stringify(data))
                setPeople(data)
            } else {
                setPeople(JSON.parse(localStorage.getItem('people')))
            }
        }
        
        getData()        
    }, []);

    const deleteRow = (item) => {
        console.log('Deleting....', item);
        const localpeople = JSON.parse(localStorage.people);
        const data = localpeople.filter(person => person.id !== item.id)
        localStorage.setItem('people', JSON.stringify(data))
        setPeople(data)
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
                data={people}
                columns={columns}
                tableDescriptor="People"
                deleteHandler={deleteRow}
            />
        </div>
    );
}

export default People;
