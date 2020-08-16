// redux
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

// Reducers
import { sportsTournamentsReducer } from './sports-tournaments/reducer';
import { selectedTournamentsReducer } from './selected-tournaments/reducer';

// sagas
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    sportsTournamentsReducer,
    selectedTournamentsReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchSaga);