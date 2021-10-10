import React from 'react';
import styled from "@emotion/styled";

const Card = ({ children, ...props }) => {
    return (
        <CardWrapper {...props}>
            {children}
        </CardWrapper>
    );
};

const Header = ({ children, ...props }) => {
    return (
        <CardHeader {...props}>
            {children}
        </CardHeader>
    )
};

const Container = ({ children, ...props }) => {
    return (
        <CardContainer {...props}>
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
  
  ${props => props.theme.device.tablet} {
    width: 400px;
    min-height: 300px;
  }
  
  ${props => props.theme.device.mobile } {
    width: 300px;
    min-height: 200px;
  }
`;

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  display: block;
  width: 100%;
`;

Card.Container = Container;
Card.Header = Header;

export default Card;
