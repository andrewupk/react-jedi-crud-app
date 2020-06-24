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
    //const [starships, setStarship] = useState([]);
    const dispatch = useDispatch();
    const starships = useSelector(state => getAllStarships(state));

    useEffect(() => {
        const getData = async () => {
            /*if (localStorage.starships === undefined){
                const data = await getStarships()
                localStorage.setItem('starships', JSON.stringify(data))
                //setStarship(data)
                dispatch(setStarships(data));
            } else {
                //setStarship(JSON.parse(localStorage.getItem('starships')))
                dispatch(setStarships(JSON.parse(localStorage.getItem('starships'))))
            }*/
            const data = await getStarships();
            dispatch(setStarships(data));
        }
        getData()        
    }, []);

    const deleteRow = (item) => {
        /*console.log('Deleting....', item);
        const localstarships = JSON.parse(localStorage.starships);
        const data = localstarships.filter(starship => starship.id !== item.id)
        localStorage.setItem('starships', JSON.stringify(data))*/
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