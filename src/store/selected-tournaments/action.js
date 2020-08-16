// action types
import {
    ADD_TOURNAMENT,
    REMOVE_TOURNAMENT,
} from '../action-types';


export const addTournaments = (tournament) => {
    return {
        type: ADD_TOURNAMENT,
        payload: {tournament}
    }
};
export const removeTournaments = (id) => {
    return {
        type: REMOVE_TOURNAMENT,
        payload: {id}
    }
};