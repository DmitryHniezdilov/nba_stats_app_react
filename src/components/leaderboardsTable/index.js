import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { TEAM_NAMES } from '../../constants';

const LeaderboardsTable = ({data = [], name}) => {
    return (
        <TableContainer
            className = 'table'
            component = { Paper }>
            <Typography
                align = 'center'
                variant = 'h3'>
                {name}
            </Typography>
            <Table
                aria-label = 'leaderboardsTable'>
                <TableHead>
                    <TableRow>
                        <TableCell align = 'center'>№</TableCell>
                        <TableCell align = 'center'>Team</TableCell>
                        <TableCell align = 'center'>Win</TableCell>
                        <TableCell align = 'center'>Loss</TableCell>
                        <TableCell align = 'center'>PPC</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, idx) => (
                        <TableRow
                            className = 'leaderboardsTable__row'
                            key = { row.name }>
                            <TableCell
                                component = 'th'
                                scope = 'row'>
                                {`${idx + 1}`}
                            </TableCell>
                            <TableCell align = 'center'>
                                <Link
                                    className = 'leaderboardsTable__link'
                                    to = { `/teams/${row.name.toLowerCase()}` }>
                                    {TEAM_NAMES[ row.name ]}
                                </Link>
                            </TableCell>
                            <TableCell align = 'center'>{row.win}</TableCell>
                            <TableCell align = 'center'>{row.loss}</TableCell>
                            <TableCell align = 'center'>{row.winPctV2}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

LeaderboardsTable.prototype = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        name:     PropTypes.string,
        win:      PropTypes.string,
        loss:     PropTypes.string,
        winPctV2: PropTypes.string,
    })),
};

export default LeaderboardsTable;
