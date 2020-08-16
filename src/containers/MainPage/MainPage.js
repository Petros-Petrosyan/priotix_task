import React from 'react';
import { useSelector } from 'react-redux';

// components
import ClipLoader from 'react-spinners/ClipLoader';
import {
    Results,
    Search,
    SelectedTournaments,
} from '../../components';


const MainPage = () => {
    const {
        data,
        loading,
        exist,
    } = useSelector((state) => state.sportsTournamentsReducer.sports_tournaments);

    let results;
    if (loading) {
        results = (
            <div style={{textAlign: 'center'}}>
                <ClipLoader
                    size={100}
                    color={"#123abc"}
                />
            </div>
            )
    }
    if (exist) {
        results = <Results data={data} />
    }

    return (
        <main>
            <Search />
            {results}
            <SelectedTournaments />
        </main>
    )
}

export { MainPage }