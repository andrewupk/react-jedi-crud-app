import React, { useState } from 'react';
import Table from "./components/common/Table";
import Form from './components/common/Form'

const data = []

const columns = ['name', 'climate', 'terrain', 'diameter', 'population', 'created', 'id'];

function Planets (){
    const [planets, setPlanet] = useState(data);
    console.log(planets);

    const handleAppPlanet = (planetData) => {
        const data = [...planets, planetData];
        setPlanet(data)
    }

    const getInitialPlanetsData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    const deleteRow = (item) => {
        console.log('Deleting....', item);
        const data = planets.filter(planet => planet !== item);
        setPlanet(data);
    }

    return (
        <div className="container">
            <div className="page-header text-center">
                <h1>Planets</h1>
            </div>
            <Table
                data={planets}
                columns={columns}
                tableDescriptor="Planets"
                deleteHandler={deleteRow}
            />
            <Form
                initialData={getInitialPlanetsData()}
                columns={columns}
                onAddData={handleAppPlanet}
            />
        </div>
    );
}

export default Planets;