import * as types from '../actionTypes';
import * as Api from '../../api/api';

export const fetchGamesByDay = (date) => async (dispatch) => {
    dispatch({type: types.START_LOADING});

    const {games} = await Api.getGamesByDay(date);

    dispatch({type: types.SET_GAMES_BY_DAY, gamesByDay: games});
    dispatch({type: types.FINISH_LOADING});
};

export const fetchMatchDetails = (date, gameId) => async (dispatch) => {
    dispatch({type: types.START_LOADING});

    const {basicGameData} = await Api.getMatchDetails(date, gameId);

    dispatch({type: types.SET_GAME_DETAILS, matchDetails: basicGameData});
    dispatch({type: types.FINISH_LOADING});
};

export const fetchStandingsConference = () => async (dispatch) => {
    dispatch({type: types.START_LOADING});

    const {league} = await Api.getStandingsConference();

    dispatch(
        {type: types.SET_STANDINGS_CONFERENCE, standingsConference: league.standard.conference},
    );
    dispatch({type: types.FINISH_LOADING});
};
