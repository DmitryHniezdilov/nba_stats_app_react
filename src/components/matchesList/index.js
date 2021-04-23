import React from 'react';
import PropTypes from 'prop-types';
import {useRouteMatch} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import MatchesItem from '../matchesItem';
import { TEAM_NAMES } from '../../constants';

const MatchesList = ({data, date}) => {
    let { url } = useRouteMatch();
    const teamName = (triCode) => TEAM_NAMES[ triCode ];

    return  data.length ? (
        <List
            aria-label = 'main list matches'
            className = 'matches__list'
            component = 'ul'>
            {data.map(({gameId, hTeam, vTeam, statusNum }) => (
                <MatchesItem
                    date = { date }
                    gameId = { gameId }
                    hTeamLoss = { hTeam.loss }
                    hTeamName = { teamName(hTeam.triCode) }
                    hTeamScore = { hTeam.score }
                    hTeamWin = { hTeam.win }
                    statusNum = { statusNum }
                    url = { url }
                    vTeamLoss = { vTeam.loss }
                    vTeamName = { teamName(vTeam.triCode) }
                    vTeamScore = { vTeam.score }
                    vTeamWin = { vTeam.win }
                />
            ))}
        </List>

    ) : (
        <CardContent >
            <Typography
                align = 'center'
                variant = 'h5'>
                No Games Today
            </Typography>
        </CardContent>
    );
};

MatchesList.prototype = {
    data: PropTypes.arrayOf(PropTypes.object),
    date: PropTypes.string,
};

export default MatchesList;
