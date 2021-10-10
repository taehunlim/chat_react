import React from 'react';
import styled from "@emotion/styled";

interface Props {
    activeKey: boolean | string;
};

interface TabProps extends Props, React.ComponentProps<'div'>{
    tabName: string;
}

const tabColor = ({ activeKey, theme }) => activeKey ? theme.color.black : theme.color.gray;

function Tab ({ activeKey, tabName, ...props }: TabProps) {
    return (
        <StyledTab activeKey={activeKey && true} {...props}>
            {tabName}
            <ActiveBar activeKey={activeKey && true}/>
        </StyledTab>
    );
};

const StyledTab = styled.div<Props>`
  width: 100%;
  position: relative;
  text-align: center;
  padding: 12px 0;
  background-color: transparent;
  color: ${tabColor};
  transition: color 250ms ease-out;
`;

const ActiveBar = styled.div<Props>`
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 2px;
  margin: 12px 0 0;
  background-color: ${tabColor};
  transition: background-color 250ms ease-out;
`;

export default Tab;
