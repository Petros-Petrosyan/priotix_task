import update from 'react-addons-update';

// action types
import {
    GET_SPORTS_TOURNAMENTS_START,
    GET_SPORTS_TOURNAMENTS_SUCCESS,
    GET_SPORTS_TOURNAMENTS_FAIL,

    GET_INIT_STATE
} from '../action-types';


const initialState = {
    sports_tournaments: {
        data: null,
        loading: false,
        exist: false,
    },
};


const getSportTournamentsStart = (state) => {
    return update(state, {
        sports_tournaments: {$merge: {
                loading: true,
                exist: false,
            }}
    })
};
const getSportTournamentsSuccess = (state, payload) => {
    const {result: {data}} = payload;
    return update(state, {
        sports_tournaments: {$merge: {
                data: data[0],
                loading: false,
                exist: true,
            }}
    })
};
const getSportTournamentsFail = (state) => {
    return update(state, {
        sports_tournaments: {$merge: {
                loading: false,
                exist: false,
            }}
    })
};

const getInitState = (state) => {
    return update(state, {
        sports_tournaments: {$merge: {
                data: null,
                loading: false,
                exist: false,
            }}
    })
};

const sportsTournamentsReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_SPORTS_TOURNAMENTS_START: return getSportTournamentsStart(state);
        case GET_SPORTS_TOURNAMENTS_SUCCESS: return getSportTournamentsSuccess(state, payload);
        case GET_SPORTS_TOURNAMENTS_FAIL: return getSportTournamentsFail(state);
        case GET_INIT_STATE: return getInitState(state);

        default: return state;
    }
};

export { sportsTournamentsReducer };