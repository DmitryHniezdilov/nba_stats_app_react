import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const MatchesItemTeam = ({win, loss, name, score  }) => {
    return (

        <CardContent >
            <Typography
                align = 'center'
                color = 'textSecondary'
                variant = 'subtitle1'>
                {win} - {loss}
            </Typography>
            <Typography
                align = 'center'
                component = 'h4'
                variant =
                    'h6'>
                {name}
            </Typography>
            <Typography
                align = 'center'
                color = 'textSecondary'
                variant = 'subtitle1'>
                {score}
            </Typography>
        </CardContent>

    );
};

MatchesItemTeam.prototype = {
    win:   PropTypes.string,
    loss:  PropTypes.string,
    name:  PropTypes.string,
    score: PropTypes.string,
};

export default MatchesItemTeam;
