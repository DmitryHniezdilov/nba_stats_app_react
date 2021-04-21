import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const MatchesDate = ({today, date, handlerDate}) => {
    let dateTitle = 'Matches';
    if (date > today[ 0 ]) {
        dateTitle = 'Upcoming Matches';
    } else if (date < today[ 0 ]) {
        dateTitle = 'Past Matches';
    } else {
        dateTitle = 'Today\'s Matches';
    }

    return (
        <CardContent >
            <Grid
                container
                alignItems = 'center'
                justify = 'center'>
                <Grid
                    item
                    xs = { 1 }>
                    <IconButton
                        align = 'right'
                        aria-label = 'Back'
                        type = 'submit'
                        onClick = { () => handlerDate(-1) }>
                        <ArrowBackIosIcon />
                    </IconButton>
                </Grid>
                <Grid
                    item
                    xs = { 5 }>
                    <Typography
                        align = 'center'
                        component = 'h2'
                        variant = 'h5'>
                        {date.toDateString()}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs = { 1 }>
                    <IconButton
                        align = 'left'
                        aria-label = 'Forward'
                        type = 'submit'
                        onClick = { () => handlerDate(1) }>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Typography
                align = 'center'
                component = 'h3'
                variant = 'h6'>
                {dateTitle}
            </Typography>
        </CardContent>
    );
};

MatchesDate.prototype = {
    today:       PropTypes.object,
    date:        PropTypes.object,
    handlerDate: PropTypes.func,
};

export default MatchesDate;
