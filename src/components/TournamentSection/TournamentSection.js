import React from 'react';
import { useDispatch } from 'react-redux';
import cogoToast from 'cogo-toast';

// actions
import { getInitState } from '../../store/sports-tournaments/action';
import {
    addTournaments,
    removeTournaments,
} from '../../store/selected-tournaments/action';

// classes
import classes from './TournamentSection.css';


const TournamentSection = (props) => {
    const {
        tournament: {
            images: {default: {filePath}},
            title,
            description,
            id,
        },
        selected,
    } = props;
    const dispatch = useDispatch();


    const addItem = () => {
        if (!selected && !localStorage.getItem(id)) {
            localStorage.setItem(id, JSON.stringify(props.tournament));
            dispatch(addTournaments(props.tournament));
            dispatch(getInitState());
            cogoToast.success('The tournament was successfully added')
        }
    }

    const deleteItem = () => {
        localStorage.removeItem(id);
        dispatch(removeTournaments(id));
        cogoToast.success('The tournament was successfully removed');
    }

    return (
        <div onClick={addItem} className={classes.section}>
            <img
                className={classes.img}
                src={`https://cdn-images.win.gg/${filePath}`}
                alt="image"
            />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {selected ? <button onClick={deleteItem} className={classes.delete}>Delete</button> : null}
            </div>
        </div>
    )
}

export { TournamentSection }