import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TeamDetailsItem = ({name, imgUrl}) => {
    return (
        <CardContent>
            <Typography
                align = 'center'
                variant = 'h5'>
                {name}
            </Typography>
            <CardMedia
                className = 'matchTeam-logo'
                image = { imgUrl }
                title = { `${name} team logo` }
            />
        </CardContent>
    );
};

TeamDetailsItem.prototype = {
    name:   PropTypes.string,
    imgUrl: PropTypes.string,
};

export default TeamDetailsItem;
