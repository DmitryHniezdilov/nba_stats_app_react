import * as types from '../actionTypes';

const initialState = {
    gamesByDay:          [],
    matchDetails:        {},
    standingsConference: {
        east: [],
        west: [],
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_GAMES_BY_DAY: {
            return {
                ...state,
                gamesByDay: action.gamesByDay,
                statsError: false,
            };
        }

        case types.SET_GAME_DETAILS: {
            return {
                ...state,
                matchDetails: action.matchDetails,
                statsError:   false,
            };
        }

        case types.SET_STANDINGS_CONFERENCE: {
            return {
                ...state,
                standingsConference: action.standingsConference,
            };
        }

        default:
            return {
                ...state,
            };
    }
};
