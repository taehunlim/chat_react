import React from 'react';
import styled from "@emotion/styled";

const Icon = ({icon, ...props}: { icon: string }) => {
    const svg = require(`!raw-loader!./icons/${icon}.svg`).default;
    //@ts-ignore
    return <Wrapper {...props} dangerouslySetInnerHTML={{__html: svg}}/>
};

const fontSize = ({width, height}) => {
    if(width && height) {
        return;
    } else {
        const size = width || height;
        return size ? `${size}px` : "22px";
    };
};

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize && fontSize} !important;
  width: ${props => props.width && props.height ? props.width : "1em"};
  height: ${props => props.width && props.height ? props.height : "1em"};
  margin: 0.1em;
  box-sizing: border-box;

  svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
  }
`;

export default Icon;
