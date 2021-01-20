import { InputLabel, Select } from '@material-ui/core';
import React from 'react';


export default function SelectBox(options: Array<{ value: string | number; text: string }>) {
    return (<>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
            native
            value={state.age}
            onChange={handleChange}
            inputProps={{
                name: 'age',
                id: 'age-native-simple',
            }}
        >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
        </Select>
    </>
    );
};