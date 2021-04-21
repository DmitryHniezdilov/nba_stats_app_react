import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const MatchPeriodStats = ({data}) => {
    return (
        <TableContainer
            className = 'matchPeriodStats-container'
            component = { Paper }>
            <Table
                aria-label = 'table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Team</TableCell>
                        <TableCell align = 'right'>P1</TableCell>
                        <TableCell align = 'right'>P2</TableCell>
                        <TableCell align = 'right'>P3</TableCell>
                        <TableCell align = 'right'>P4</TableCell>
                        <TableCell align = 'right'>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key = { row.triCode }>
                            <TableCell
                                component = 'th'
                                scope = 'row'>
                                {row.triCode}
                            </TableCell>
                            <TableCell align = 'right'>{row.P1}</TableCell>
                            <TableCell align = 'right'>{row.P2}</TableCell>
                            <TableCell align = 'right'>{row.P3}</TableCell>
                            <TableCell align = 'right'>{row.P4}</TableCell>
                            <TableCell align = 'right'>{row.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

MatchPeriodStats.prototype = {
    data: PropTypes.arrayOf(PropTypes.shape({
        P1:      PropTypes.string,
        P2:      PropTypes.string,
        P3:      PropTypes.string,
        P4:      PropTypes.string,
        triCode: PropTypes.string,
        score:   PropTypes.string,
    })),
};

export default MatchPeriodStats;
