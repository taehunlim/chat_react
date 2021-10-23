import React from 'react';
import styled from "@emotion/styled";

interface Props {
    width?: number;
    height?: number;
};

const Icon = ({icon, ...props}) => {
    const svg = require(`!raw-loader!./icons/${icon}.svg`).default;
    return <Wrapper {...props} dangerouslySetInnerHTML={{__html: svg}}/>
};

const fontSize = (props) => {
    const { width, height } = props;
    if(width && height) {
        return "0px";
    } else {
        const size = width || height;
        return size ? `${size}px` : "22px";
    };
};

const Wrapper = styled.span<Props>`
  display: inline-block;
  font-size: ${fontSize && fontSize} !important;
  width: ${props => props.width && props.height ? `${props.width}px` : "1em"};
  height: ${props => props.width && props.height ? `${props.height}px` : "1em"};
  margin: 0.1em;
  box-sizing: border-box;

  svg {
    pointer-events: none;
    width: 100%;
    height: 100%;
    fill: currentcolor;
  }
`;

export default Icon;
