import React, { useEffect } from 'react';
import Table from "./components/common/Table";
import { getPlanets } from './services/swApiService';
import Button from './components/common/Button';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPlanets, deletePlanet } from './store/actions/planets';
import { getAllPlanets } from './store/selectors/planets';

const columns = ['name', 'climate', 'terrain', 'diameter', 'population', 'created', 'id'];

function Planets (){
    //const [planets, setPlanet] = useState([]);
    const dispatch = useDispatch();
    const planets = useSelector(state => getAllPlanets(state));

    useEffect(() => {
        const getData = async () => {
            /*if (localStorage.planets === undefined){
                const data = await getPlanets()
                localStorage.setItem('planets', JSON.stringify(data))
                //setPlanet(data)
                dispatch(setPlanets(data))
            } else {
                //setPlanet(JSON.parse(localStorage.getItem('planets')))
                dispatch(setPlanets(JSON.parse(localStorage.getItem('planets'))));
            }*/
            const data = await getPlanets();
            dispatch(setPlanets(data));
        }
        getData()        
    }, []);

    const deleteRow = (item) => {
        /*console.log('Deleting....', item);
        const localplanets = JSON.parse(localStorage.planets);
        const data = localplanets.filter(planet => planet.id !== item.id)
        localStorage.setItem('planets', JSON.stringify(data))*/
        //setPlanet(data)
        dispatch(deletePlanet(item.id));
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