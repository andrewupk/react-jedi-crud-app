import React, { useState, useEffect } from 'react';
import Table from "./components/common/Table";
import { getPlanets } from './services/swApiService';
import Button from './components/common/Button';
import {Link} from 'react-router-dom';

const columns = ['name', 'climate', 'terrain', 'diameter', 'population', 'created', 'id'];

function Planets (){
    const [planets, setPlanet] = useState([]);

    useEffect(() => {
        const getData = async () => {
            if (localStorage.planets === undefined){
                const data = await getPlanets()
                localStorage.setItem('planets', JSON.stringify(data))
                setPlanet(data)
            } else {
                setPlanet(JSON.parse(localStorage.getItem('planets')))
            }
        }
        getData()        
    }, []);

    const deleteRow = (item) => {
        console.log('Deleting....', item);
        const localplanets = JSON.parse(localStorage.planets);
        const data = localplanets.filter(planet => planet.id !== item.id)
        localStorage.setItem('planets', JSON.stringify(data))
        setPlanet(data)
    }

    return (
        <div className="container">
            <div className="page-header text-center">
                <h1>Planets</h1>
            </div>
            <Link to="/planets/new">
                <Button
                    label="New planet"
                    classes="btn btn-info"
                    disabled={false}
                />
            </Link>
            <Table
                data={planets}
                columns={columns}
                tableDescriptor="Planets"
                deleteHandler={deleteRow}
            />
        </div>
    );
}

export default Planets;