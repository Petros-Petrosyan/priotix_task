import cogoToast from 'cogo-toast';

// saga effects
import {
    put,
    takeEvery,
    all,
} from 'redux-saga/effects';

// http services
import { getSportsTournaments } from '../../services/http-services';

// action types
import { GET_SPORTS_TOURNAMENTS_INIT } from '../action-types';

// actions
import {
    getSportsTournamentsStart,
    getSportsTournamentsSuccess,
    getSportsTournamentsFail,
} from './action';


function* getSportsTournamentsInit(action) {
    const {payload: {params}} = action;
    yield put(getSportsTournamentsStart());
    try {
        const result = yield getSportsTournaments(params);
        yield put(getSportsTournamentsSuccess(result));
    } catch (err) {
        cogoToast.error(err.message);
        put(getSportsTournamentsFail());
    }
}


export function* sportsTournamentsSaga() {
    yield all([
        takeEvery(GET_SPORTS_TOURNAMENTS_INIT, getSportsTournamentsInit),
    ]);
}