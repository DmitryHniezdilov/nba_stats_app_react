import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const MatchTeam = ({name, imgUrl, win, loss, triCode }) => {
    const teamWinLoss = `${win} - ${loss}`;

    return (
        <CardContent className = 'link-hover'>
            <Link
                className = 'link'
                to = { `/teams/${triCode.toLowerCase()}` }>
                <Typography
                    align = 'center'
                    variant = 'h5'>
                    {name}
                </Typography>
                <CardMedia
                    className = 'matchTeam-logo'
                    image = { imgUrl }
                    title = 'HomeTeam'
                />
                <Typography
                    align = 'center'
                    color = 'textSecondary'
                    variant = 'subtitle1'>
                    {teamWinLoss}
                </Typography>
            </Link>
        </CardContent>
    );
};

MatchTeam.prototype = {
    name:   PropTypes.string,
    imgUrl: PropTypes.string,
    win:    PropTypes.string,
    loss:   PropTypes.string,
};

export default MatchTeam;
