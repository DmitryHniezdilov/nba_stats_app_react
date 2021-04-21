import React from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import statsReducer from './reducers/stats';
import generalReducer from './reducers/general';

const rootReducer = combineReducers({
    stats:   statsReducer,
    general: generalReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk)),
);

const InitStore = ({ children }) => (
    <Provider store = { store }>
        {children}
    </Provider>
);

export default InitStore;
