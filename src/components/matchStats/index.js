import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MatchTeam from '../../components/matchTeam';
import { TEAM_NAMES, urlConstants } from '../../constants';

const MatchStats = (
    {hTeamTriCode, vTeamTriCode, score, hTeamLoss, hTeamWin, vTeamLoss, vTeamWin },
) => {
    return (
        <Grid
            container
            alignItems = 'center'
            justify = 'center'
            spacing = { 0 }>
            <Grid
                item
                xs = { 3 }>
                <MatchTeam
                    imgUrl = { urlConstants.GET_TEAM_LOGO(hTeamTriCode) }
                    loss = { hTeamLoss }
                    name = { TEAM_NAMES[ hTeamTriCode ] }
                    triCode = { hTeamTriCode }
                    win = { hTeamWin }
                />
            </Grid>
            <Grid
                item
                xs = { 3 }>
                <CardContent>
                    <Typography
                        align = 'center'
                        color = 'textSecondary'
                        variant = 'h6'>
                        Final
                    </Typography>
                    <Typography
                        align = 'center'
                        variant = 'h4'>
                        {score}
                    </Typography>
                </CardContent>
            </Grid>
            <Grid
                item
                xs = { 3 }>
                <MatchTeam
                    imgUrl = { urlConstants.GET_TEAM_LOGO(vTeamTriCode) }
                    loss = { vTeamLoss }
                    name = { TEAM_NAMES[ vTeamTriCode ] }
                    triCode = { vTeamTriCode }
                    win = { vTeamWin }
                />
            </Grid>
        </Grid>
    );
};

MatchStats.prototype = {
    hTeamTriCode: PropTypes.string,
    vTeamTriCode: PropTypes.string,
    score:        PropTypes.string,
    period:       PropTypes.string,
    hTeamWin:     PropTypes.string,
    vTeamWin:     PropTypes.string,
    hTeamLoss:    PropTypes.string,
    vTeamLoss:    PropTypes.string,
};

export default MatchStats;
