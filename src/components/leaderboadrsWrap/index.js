import React from 'react';
import { useSelector} from 'react-redux';
import { Grid } from '@material-ui/core';
import LeaderboardsTable from '../leaderboardsTable';

const LeaderboardsWrap = () => {
    const {standingsConference} = useSelector((state) => state.stats);
    const {east, west} = standingsConference;

    const normalizeTableData = (arr) => {
        return arr.map((
            {win, loss, winPctV2, teamSitesOnly},
        ) => ({win, loss, winPctV2, name: teamSitesOnly.teamTricode}));
    };

    return (
        <Grid
            container
            justify = 'center'
            spacing = { 2 }>
            <Grid
                item
                xs = { 6 }>
                <LeaderboardsTable
                    data = { normalizeTableData(east) }
                    name = 'East'
                />
            </Grid>
            <Grid
                item
                xs = { 6 }>
                <LeaderboardsTable
                    data = { normalizeTableData(west) }
                    name = 'West'
                />
            </Grid>
        </Grid>
    );
};

export default LeaderboardsWrap;
