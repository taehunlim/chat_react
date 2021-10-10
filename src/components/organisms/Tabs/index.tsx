import React, {ReactChildren, ReactElement} from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Tab from "../../atoms/Tab";
import useTabs from "../../hooks/useTabs";

interface Props extends React.ComponentProps<'div'>{
    defaultActiveKey: string,
    onChange: (activeKey) => void;
};

function Tabs({ onChange, defaultActiveKey, children, ...props }: Props) {
    const { currentItem, changeItem } = useTabs(defaultActiveKey, children);
    return (
        <Wrapper {...props}>
            {React.Children.map(children, (child, i) => {
                const item = child as ReactElement
                const { activeKey, tabName } = item.props;
                return (
                    <Tab
                        key={i}
                        activeKey={currentItem === activeKey}
                        tabName={tabName}
                        onClick={() => {
                            changeItem(activeKey)
                            onChange(activeKey)
                        }}
                    />
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;	  
  width: 100%;
`;

Tabs.Tab = Tab;

export default Tabs;
