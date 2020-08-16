import update from 'react-addons-update';
import { getAllStorageData } from '../../utilities';

// action types
import {
    ADD_TOURNAMENT,
    REMOVE_TOURNAMENT,
} from '../action-types';

const initialState = {
    selectedTournaments: getAllStorageData(),
};

const addTournament = (state, payload) => {
    const {tournament} = payload;
    return update(state, {
        selectedTournaments: {$splice: [[state.selectedTournaments.length, 0, tournament]]}
    })
};
const removeTournament = (state, payload) => {
    const {id} = payload;
    const index = state.selectedTournaments.findIndex((el) => el.id === id)
    return update(state, {
        selectedTournaments: {$splice: [[index, 1]]}
    })
};

const selectedTournamentsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_TOURNAMENT: return addTournament(state, payload);
        case REMOVE_TOURNAMENT: return removeTournament(state, payload);

        default: return state;
    }
};

export { selectedTournamentsReducer };