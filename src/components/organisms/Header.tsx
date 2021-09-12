import React from 'react';
import styled from "@emotion/styled";

const Header = () => {
    return (
        <StyledHeader>
            Test Socket
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
  box-shadow: 0 2px 5px rgba(black, 0.2);
  padding: 20px 30px;
  background-color: cornflowerblue;
`;

export default Header;
