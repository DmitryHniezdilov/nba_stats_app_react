import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MatchesItemTeam from '../matchesItemTeam';

const MatchesItem = (
    {   url,
        date,
        gameId,
        statusNum,
        hTeamWin, vTeamWin,
        hTeamScore, vTeamScore,
        hTeamName, vTeamName,
        hTeamLoss, vTeamLoss,
    },
) => {
    return (
        <li
            key = { gameId }>
            <Link
                className = 'link'
                to = { `${url}/${date}/${gameId}` }>
                <Grid
                    container
                    alignItems = 'center'
                    className = 'link-hover'>
                    <Grid
                        item
                        xs = { 5 }>
                        <MatchesItemTeam
                            loss = { hTeamLoss }
                            name = { hTeamName }
                            score = { hTeamScore }
                            win = { hTeamWin }
                        />
                    </Grid>
                    <Grid
                        item
                        xs = { 2 }>
                        <CardContent >
                            <Typography
                                align = 'center'
                                color = 'textSecondary'
                                variant = 'h6'>
                                { statusNum === 1 && 'EXP'}
                                { statusNum === 2 && 'LIVE'}
                                { statusNum === 3 && 'END'}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid
                        item
                        xs = { 5 }>
                        <MatchesItemTeam
                            loss = { vTeamLoss }
                            name = { vTeamName }
                            score = { vTeamScore }
                            win = { vTeamWin }
                        />
                    </Grid>
                </Grid>
            </Link>
        </li>
    );
};

MatchesItem.prototype = {
    date:       PropTypes.string,
    url:        PropTypes.string,
    gameId:     PropTypes.string,
    hTeamWin:   PropTypes.string,
    vTeamWin:   PropTypes.string,
    hTeamScore: PropTypes.string,
    vTeamScore: PropTypes.string,
    hTeamName:  PropTypes.string,
    vTeamName:  PropTypes.string,
    hTeamLoss:  PropTypes.string,
    vTeamLoss:  PropTypes.string,
};

export default MatchesItem;
