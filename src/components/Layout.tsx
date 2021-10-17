import React from 'react';
import styled from '@emotion/styled';

import { useDarkMode } from './hooks/useDarkMode';
import DarkModeToggle from './DarkModeToggle';
import Header from "./organisms/Header";

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <>
            <DarkModeToggle
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <Header/>

            <Container>
                {children}
            </Container>
        </>
    );
};

const Container = styled.div`
  width: 100%;
  padding: 100px;
  
  ${props => props.theme.device.desktop} {
    max-width: 1400px;
    margin: 0 auto;
  }

  ${props => props.theme.device.laptop} {
    padding: 80px;
  }

  ${props => props.theme.device.tablet} {
    padding: 40px;
  }

  ${props => props.theme.device.mobile} {
    padding: 20px;
  }
`;

export default Layout ;