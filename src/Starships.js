import React, { useEffect } from 'react';
import Table from "./components/common/Table";
import { getStarships } from './services/swApiService';
import Button from './components/common/Button';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStarship, setStarships } from './store/actions/starships';
import { getAllStarships } from './store/selectors/starships';

const columns = ['name', 'model', 'starship_class', 'manufacturer', 'MGLT', 'hyperdrive_rating', 'id'];

function Starships (){
    const dispatch = useDispatch();
    const starships = useSelector(state => getAllStarships(state));

    useEffect(() => {
        const getData = async () => {
            const data = await getStarships();
            dispatch(setStarships(data));
        }
        getData()        
    }, []);

    const deleteRow = (item) => {
        dispatch(deleteStarship(item.id));
    }

    return (
        <div className="container">
            <div className="page-header text-center">
                <h1>Starships</h1>
            </div>
            <Link to="/starships/new">
                <Button
                    label="New starship"
                    classes="btn btn-info"
                    disabled={false}
                />
            </Link>
            <Table
                data={starships}
                columns={columns}
                tableDescriptor="Starships"
                deleteHandler={deleteRow}
            />
        </div>
    );
}

export default Starships;