import React from 'react';
import styled from '@emotion/styled';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {

    return (
        <BTN
            {...props}
        >
            {props.children}
        </BTN>
    );
};

export const BTN = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  font-size: 16px;
  height: auto;
  border-radius: 5px;
  border: none;
  padding: 15px 20px;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`

export default Button;