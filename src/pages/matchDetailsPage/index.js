import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as stats from '../../redux/actions/stats';
import {useRouteMatch} from 'react-router-dom';
import MatchDetailsWrap from '../../components/matchDetailsWrap';

const MatchDetailsPage = () => {
    const {params} = useRouteMatch();
    const {matchDetails} = useSelector((state) => state.stats);
    const dispatch = useDispatch();

    useEffect(() => {
        const {date, gameId} = params;

        const getMatchDetails = async () => {
            await dispatch(stats.fetchMatchDetails(date, gameId));
        };
        getMatchDetails();
    }, [ params ]);

    return Object.keys(matchDetails).length && (
        <MatchDetailsWrap/>
    );
};

export default MatchDetailsPage;
