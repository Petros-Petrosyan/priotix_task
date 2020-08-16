// action types
import {
    GET_SPORTS_TOURNAMENTS_INIT,
    GET_SPORTS_TOURNAMENTS_START,
    GET_SPORTS_TOURNAMENTS_SUCCESS,
    GET_SPORTS_TOURNAMENTS_FAIL,
    GET_INIT_STATE
} from '../action-types';


export const getSportsTournamentsInit = (params) => {
    return {
        type: GET_SPORTS_TOURNAMENTS_INIT,
        payload: {params}
    }
};
export const getSportsTournamentsStart = () => {
    return {
        type: GET_SPORTS_TOURNAMENTS_START,
    }
};
export const getSportsTournamentsSuccess = (result) => {
    return {
        type: GET_SPORTS_TOURNAMENTS_SUCCESS,
        payload: {result}
    }
};
export const getSportsTournamentsFail = () => {
    return {
        type: GET_SPORTS_TOURNAMENTS_FAIL,
    }
};

export const getInitState = () => {
    return {
        type: GET_INIT_STATE,
    }
};
