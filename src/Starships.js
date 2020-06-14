import React, { useState } from 'react';
import Table from "./components/common/Table";
import Form from './components/common/Form'

const data = []

const columns = ['name', 'weight', 'max_speed', 'owner', 'id'];

function Starships (){
    const [starships, setStarship] = useState(data);
    console.log(starships);

    const handleAppStarship = (starshipData) => {
        const data = [...starships, starshipData];
        setStarship(data)
    }

    const getInitialStartshipsData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    const deleteRow = (item) => {
        console.log('Deleting....', item);
        const data = starships.filter(startship => startship !== item);
        setStarship(data);
    }

    return (
        <div className="container">
            <div className="page-header text-center">
                <h1>Starships</h1>
            </div>
            <Table
                data={starships}
                columns={columns}
                tableDescriptor="Starships"
                deleteHandler={deleteRow}
            />
            <Form
                initialData={getInitialStartshipsData()}
                columns={columns}
                onAddData={handleAppStarship}
            />
        </div>
    );
}

export default Starships;