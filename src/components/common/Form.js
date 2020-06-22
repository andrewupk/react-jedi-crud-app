import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({columns, initialData, onAddData, onValidate, errors}) => {
    const [itemData, setItemData] = useState(initialData);

    const handleClick = (event) => {
        event.preventDefault();
        if (onValidate(itemData)){
            onAddData(itemData);
        } else {
            console.log(errors);
            alert(JSON.stringify(errors))
        }
    }

    const handleChange = (event) => {
        const { currentTarget : input } = event;
        const data = {...itemData};
        data[input.name] = input.value;
        setItemData(data)
    }


    return (
        <form>
            {columns.map( columnName => (
                <Input
                key={columnName}
                name={columnName}
                label={columnName}
                value={itemData[columnName]}
                type="input"
                onChange={handleChange}
                />
            ))}
            <Button
                label="Save"
                classes="btn btn-primary"
                onClick={handleClick}
            />
        </form>
    );
};

export default Form;
