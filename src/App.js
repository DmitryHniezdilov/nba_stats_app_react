import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import LeaderboardsPage from './pages/leaderboardsPage';
import MatchesPage from './pages/matchesPage';
import MatchDetailsPage from './pages/matchDetailsPage';
import TeamDetailsPage from './pages/teamDetailsPage';
import Header from './components/header';
import Loading from './components/loading';
import './index.scss';

const App = () => {
    return (
        <Container maxWidth = 'md'>
            <Router>
                <Loading/>
                <Header/>
                <Switch>
                    <Route
                        exact
                        key = '/'
                        path = '/'>
                        <Typography
                            align = 'center'
                            variant = 'h1'>
                            NBA Stats App
                        </Typography>
                    </Route>
                    <Route
                        exact
                        key = 'matches'
                        path = '/matches'>
                        <MatchesPage />
                    </Route>
                    <Route
                        exact
                        key = 'matchDetails'
                        path = '/matches/:date/:gameId'>
                        <MatchDetailsPage />
                    </Route>
                    <Route
                        exact
                        key = 'leaderboards'
                        path = '/leaderboards'>
                        <LeaderboardsPage />
                    </Route>
                    <Route
                        exact
                        key = 'teamDetails'
                        path = '/teams/:triCode'>
                        <TeamDetailsPage />
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
};

export default App;
