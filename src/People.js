import React, { useState } from 'react';
import Table from "./components/common/Table";
import Form from './components/common/Form'

// import './App.css';


const data = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = Object.keys(data[0]);

function People() {
    const [people, setPeople] = useState(data);
    console.log(people);

    const handleAppPerson = (personData) => {
        const data = [...people, personData];
        setPeople(data)
    }

    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    const deleteRow = (item) => {
        console.log('Deleting....', item);
        const data = people.filter(person => person !== item);
        setPeople(data);
    }

    return (
        <div className="container">
            <div className="page-header text-center">
                <h1>People</h1>
            </div>
            <Table
                data={people}
                columns={columns}
                tableDescriptor="People"
                deleteHandler={deleteRow}
            />
            <Form
                initialData={getInitialPeopleData()}
                columns={columns}
                onAddData={handleAppPerson}
            />
        </div>
    );
}

export default People;
