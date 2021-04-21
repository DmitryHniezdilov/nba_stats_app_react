import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
import TeamDetailsTitle from '../teamDetailsTitle';
import TeamDetailsItem from '../teamDetailsItem';
import { TEAM_NAMES, urlConstants } from '../../constants';

const TeamDetailsWrap = ({teamInfo}) => {
    const {teamSitesOnly, loss, win, winPctV2} = teamInfo;
    const {teamTricode} = teamSitesOnly;
    const playedMatches = String(Number(loss) + Number(win));

    return (
        <Paper>
            <Grid
                container
                alignItems = 'center'
                justify = 'center'
                spacing = { 0 }>
                <Grid
                    item
                    xs = { 4 }>
                    <TeamDetailsTitle
                        imgUrl = { urlConstants.GET_TEAM_LOGO(teamTricode) }
                        name = { TEAM_NAMES[ teamTricode ] }
                    />
                </Grid>
                <Grid
                    item
                    xs = { 8 }>
                    <Grid
                        container
                        alignItems = 'center'
                        justify = 'center'
                        spacing = { 0 }>
                        <Grid
                            item
                            xs = { 6 }>
                            <TeamDetailsItem
                                name = 'Played Matches'
                                points = { playedMatches }
                            />
                        </Grid>
                        <Grid
                            item
                            xs = { 6 }>
                            <TeamDetailsItem
                                name = 'Number Of Victories'
                                points = { win }
                            />
                        </Grid>
                        <Grid
                            item
                            xs = { 6 }>
                            <TeamDetailsItem
                                name = 'Number Of Losses'
                                points = { loss }
                            />
                        </Grid>
                        <Grid
                            item
                            xs = { 6 }>
                            <TeamDetailsItem
                                chartValue = { winPctV2 }
                                name = 'Percentage Of Winnings In Match Played'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

TeamDetailsWrap.prototype = {
    teamInfo: PropTypes.object,
};

export default TeamDetailsWrap;
