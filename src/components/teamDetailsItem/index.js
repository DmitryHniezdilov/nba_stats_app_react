import React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import Typography from '@material-ui/core/Typography';
import { CardContent, Grid } from '@material-ui/core';

const TeamDetailsItem = ({name, points, chartValue}) => {
    const normalizeChartData = [{ value: Number(chartValue), color: '#1976d2' }];

    return (
        <CardContent>
            <Grid
                container
                alignItems = 'center'
                spacing = { 0 }>
                <Grid
                    item
                    xs = { 10 }>
                    <Typography
                        color = 'textSecondary'
                        variant = 'h6'>
                        {name}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs = { 2 }>
                    {points && (
                        <Typography
                            align = 'center'
                            variant = 'h6'>
                            {points}
                        </Typography>
                    )}
                    {chartValue && (
                        <div
                            data-for = 'chart'
                            data-tip = ''>
                            <PieChart
                                data = { normalizeChartData }
                                label = { ({ dataEntry }) => dataEntry.value + '%' }
                                labelPosition = { 0 }
                                labelStyle = {{
                                    fontSize:   '30px',
                                    fontFamily: '"Roboto", sans-serif',
                                    fill:       '#1976d2',
                                }}
                                lineWidth = { 20 }
                                startAngle = { -90 }
                                totalValue = { 100 }
                            />
                        </div>
                    )}
                </Grid>
            </Grid>
        </CardContent>
    );
};

TeamDetailsItem.prototype = {
    name:       PropTypes.string,
    points:     PropTypes.string,
    chartValue: PropTypes.string,
};

export default TeamDetailsItem;
