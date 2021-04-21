import { urlConstants } from '../constants';

// Private functions
const callApi = (endpoint) => {
    const url = `${urlConstants.API_BASE}/${endpoint}`;

    return fetch(url)
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            return JSON.parse(data);
        });
};

export const getMatchDetails = (date, gameId) => callApi(`v1/${date}/${gameId}_boxscore.json`);
export const getGamesByDay = (date) => callApi(`v2/${date}/scoreboard.json`);
export const getStandingsConference = () => callApi('v1/current/standings_conference.json');
