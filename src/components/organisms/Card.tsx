import React from 'react';
import styled from "@emotion/styled";

const Card = ({ children }) => {
    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    );
};

const Header = ({ children }) => {
    return (
        <CardHeader>
            {children}
        </CardHeader>
    )
};

const Container = ({ children }) => {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
};

const CardWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  min-height: 400px;
  width: 500px;
  margin: 0 auto;
  padding: 35px;
  
  ${ props => props.theme.device.tablet} {
    width: 400px;
    min-height: 300px;
  }
  
  ${ props => props.theme.device.mobile } {
    width: 300px;
    min-height: 200px;
  }
`;

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
    display: flex;
`;

Card.Container = Container;
Card.Headher = Header;

export default Card;
