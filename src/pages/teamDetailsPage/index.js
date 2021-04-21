import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import * as stats from '../../redux/actions/stats';
import TeamDetailsWrap from '../../components/teamDetailsWrap';

const TeamDetailsPage = () => {
    const dispatch = useDispatch();
    const { params } = useRouteMatch();
    const { triCode } = params;
    const { standingsConference } = useSelector((state) => state.stats);
    const { east, west } = standingsConference;
    const teamsStats = [ ...east, ...west ];

    const currentTeam = teamsStats.find((team) =>  {
        return triCode === team.teamSitesOnly.teamTricode.toLowerCase();
    }) || {};

    useEffect(() => {
        if (east.length || west.length) {
            return;
        }
        const getStandingsConference = async () => {
            await dispatch(stats.fetchStandingsConference());
        };
        getStandingsConference();
    }, []);

    return Object.keys(currentTeam).length && (
        <TeamDetailsWrap
            teamInfo = { currentTeam }
        />
    );
};

export default TeamDetailsPage;
