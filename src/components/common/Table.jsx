import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function Table({columns, data, tableDescriptor, deleteHandler}) {
    if (data.length){
        return (
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">{tableDescriptor}</th>
                    {columns.map(columnTitle => (
                        <th key={columnTitle} scope="col">{columnTitle}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <th scope="row">{++index}</th>
                        {columns.map(columnTitle => {
                            if (columnTitle === 'name'){
                                return <td key={item[columnTitle]+columnTitle}><Link to={tableDescriptor + '/' + item.id}>{item[columnTitle]}</Link></td>
                            } else {
                                return <td key={item[columnTitle]+columnTitle}>{item[columnTitle]}</td>
                            }
                        })}
                        <td>
                            <Button 
                                label="Delete"
                                classes="btn btn-danger"
                                onClick={() => deleteHandler(item)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    } else {
        return (
            <div className="alert alert-warning text-center">
                <strong>No data</strong>
            </div>
        )
    }
}

export default Table;
