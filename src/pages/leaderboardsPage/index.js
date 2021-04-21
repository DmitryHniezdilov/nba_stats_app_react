import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LeaderboardsWrap from '../../components/leaderboadrsWrap';
import * as stats from '../../redux/actions/stats';

const LeaderboardsPage = () => {
    const {standingsConference} = useSelector((state) => state.stats);
    const dispatch = useDispatch();

    useEffect(() => {
        const getStandingsConference = async () => {
            await dispatch(stats.fetchStandingsConference());
        };
        getStandingsConference();
    }, []);

    return Object.keys(standingsConference).length && (

        <LeaderboardsWrap/>

    );
};

export default LeaderboardsPage;
