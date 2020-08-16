import React from 'react';
import { useSelector } from 'react-redux';

// components
import { TournamentSection } from '../';

// classes
import classes from './SelectedTournaments.css';


const SelectedTournaments = () => {
    const selectedTournaments = useSelector((state) => state.selectedTournamentsReducer.selectedTournaments);

    const printTournaments = selectedTournaments.map((tournament) => {
            return (
                <TournamentSection
                    key={tournament.id}
                    tournament={tournament}
                    selected={true}
                />
            )
        })

    return (
        <section className={classes.selected}>
            <h2 className={classes.title}>Selected Sport Tournaments: {selectedTournaments.length}</h2>
            {printTournaments}
        </section>
    )
}

export { SelectedTournaments }