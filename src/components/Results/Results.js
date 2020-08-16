import React from 'react';

// components
import { TournamentSection } from '../';

// classes
import classes from './Results.css';


const Results = (props) => {
    const {data} = props;

    let printTournaments = <h2>Sorry, no sports tournaments with these parameters was found</h2>
    if (data) {
        printTournaments = data.documents.map((tournament) => {
            return (
                <TournamentSection
                    key={tournament.id}
                    tournament={tournament}
                />
            )
        })
    }

    return (
        <section className={classes.container}>
            {printTournaments}
        </section>
    )
}


export { Results }