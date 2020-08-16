import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from "material-ui-search-bar";

// actions
import { getSportsTournamentsInit } from '../../store/sports-tournaments/action';

// classes
import classes from './Search.css';


const Search = () => {
    const [q, setQ] = useState('');
    const dispatch = useDispatch();

    const getData = () => {
        if (q.length > 1) {
            const params = {index:'tournament', q}
            dispatch(getSportsTournamentsInit(params));
        }
    }

    return (
        <div className={classes.search}>
            <SearchBar
                value={q}
                onChange={(newValue) => setQ(() => newValue)}
                onRequestSearch={getData}
            />
        </div>
    )
}


export { Search }