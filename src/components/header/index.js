import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const Header = () => {
    return (
        <Grid
            container
            alignItems = 'center'
            justify = 'center'
            spacing = { 3 }
            style = {{ padding: 30 }} >
            <Button
                color = 'primary'
                component = { Link }
                key = 'matches'
                style = {{ margin: 20 }}
                to = '/matches'>
                Matches
            </Button>
            <Button
                color = 'primary'
                component = { Link }
                key = 'leaderboards'
                style = {{ margin: 20 }}
                to = '/leaderboards'>
                Leaderboards
            </Button>
        </Grid>
    );
};

export default Header;
