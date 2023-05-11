import * as React from 'react';
import styled from 'styled-components';
import { Navigation } from '../components/AcademicPerformance/Navigation';
import { Grid } from '../components/AcademicPerformance/Grid';

const AcademicPerformanceContainer = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 2fr;
    height: 920px;
    & * {
        box-sizing: border-box;
    }
`;

export const AcademicPerformance = () => {
    return (
        <AcademicPerformanceContainer>
            <Navigation />
            <Grid />
        </AcademicPerformanceContainer>
    );
};