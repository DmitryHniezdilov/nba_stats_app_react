import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as stats from '../../redux/actions/stats';
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import MatchesDate from '../../components/matchesDate';
import MatchesList from '../../components/matchesList';
import { urlConstants } from '../../constants';

const MatchesPage = () => {
    const today = useState(new Date());
    const [ date, setHandlerDate ] = useState(new Date());
    const {gamesByDay} = useSelector((state) => state.stats);
    const dispatch = useDispatch();

    const handlerDate = (offset) => {
        const changeDate = date.getDate() + offset;
        const updatedDate = new Date(date.setDate(changeDate));
        setHandlerDate(updatedDate);
    };

    let dateToRequest = urlConstants.FORMAT_DATE(date);

    useEffect(() => {
        const getGamesByDay = async () => {
            await dispatch(stats.fetchGamesByDay(dateToRequest));
        };
        getGamesByDay();
    }, [ date ]);

    return (
        <Container
            maxWidth = 'sm'>
            <Card
                variant = 'outlined'>
                <MatchesDate
                    date = { date }
                    handlerDate = { (offset) => handlerDate(offset) }
                    today = { today }
                />
                <Divider />
                <MatchesList
                    data = { gamesByDay }
                    date = { dateToRequest }
                />
            </Card>
        </Container>
    );
};

export default MatchesPage;
