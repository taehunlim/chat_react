import React from 'react';
import styled from '@emotion/styled';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <INPUT
            {...props}
        />
    );
};

export const INPUT = styled.input`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  font-size: 15px;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: transparent;
`
export default Input;