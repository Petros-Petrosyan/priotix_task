// saga effects
import { all } from 'redux-saga/effects';

// sagas
import { sportsTournamentsSaga } from './sports-tournaments/saga';


export function* watchSaga() {
    yield all([
        sportsTournamentsSaga(),
    ])
}