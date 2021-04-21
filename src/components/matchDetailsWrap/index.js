import React from 'react';
import { useSelector} from 'react-redux';
import { Container } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MatchStats from '../matchStats';
import MatchPeriodStats from '../matchPeriodStats';

const MatchDetailsWrap = () => {
    const {matchDetails} = useSelector((state) => state.stats);
    const {hTeam, vTeam} = matchDetails;
    const {
        score: hTeamScore,
        triCode: hTeamTriCode,
        linescore: hTeamLinescore,
        win: hTeamWin,
        loss: hTeamLoss} = hTeam;
    const {
        score: vTeamScore,
        triCode: vTeamTriCode,
        linescore: vTeamLinescore,
        win: vTeamWin,
        loss: vTeamLoss} = vTeam;

    const normalizeTeamLinescore = (linescore) => {
        return linescore.reduce((acc, item, idx) => {
            const periodName = `P${idx + 1}`;

            return {...acc, [ periodName ]: item.score};
        }, {});
    };

    const updatedHTeamLinescore = {
        ...normalizeTeamLinescore(hTeamLinescore),
        triCode: hTeamTriCode,
        score:   hTeamScore,
    };
    const updatedVTeamLinescore = {
        ...normalizeTeamLinescore(vTeamLinescore),
        triCode: vTeamTriCode,
        score:   vTeamScore,
    };

    const matchScore = `${hTeamScore} - ${vTeamScore}`;

    return matchDetails.statusNum === 3 ? (
        <>
            <MatchStats
                clock = { '--' }
                hTeamLoss = { hTeamLoss }
                hTeamTriCode = { hTeamTriCode }
                hTeamWin = { hTeamWin }
                score = { matchScore }
                vTeamLoss = { vTeamLoss }
                vTeamTriCode = { vTeamTriCode }
                vTeamWin = { vTeamWin }
            />
            <Container maxWidth = 'sm'>
                <MatchPeriodStats
                    data = { [ updatedHTeamLinescore, updatedVTeamLinescore ] }
                />
            </Container>
        </>
    ) : (
        <CardContent >
            <Typography
                align = 'center'
                className = 'matches__error'
                variant = 'h5'>
                The game is not over
            </Typography>
        </CardContent>
    );
};

export default MatchDetailsWrap;
