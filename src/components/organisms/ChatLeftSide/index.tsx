import React, {useState} from 'react';
import styled from "@emotion/styled";

import Tabs from "../Tabs";
import ChatList from "../../molecules/ChatList";

const ChatLeftSide = ({data}) => {
    const [currentTab, setCurrentTab] = useState({
        activeKey: "chat",
        tabName: "채팅"
    });

    return (
        <Wrapper>
            <Tabs
                defaultActiveKey={currentTab.activeKey}
                onChange={(activeKey, tabName) => {
                    setCurrentTab({
                        activeKey,
                        tabName,
                    })
                }}
            >
                <Tabs.TabPane activeKey="chat" tabName="채팅"/>
                <Tabs.TabPane activeKey="group" tabName="그룹"/>
                <Tabs.TabPane activeKey="contact" tabName="연락처"/>
            </Tabs>

            <div>
                <TabTitle>{currentTab.tabName}</TabTitle>
                <ul>
                    <ScrollContainer>
                        {currentTab.activeKey === "chat" && data.map((chat, i: number) => (
                            <ChatList
                                key={i}
                                id={chat.id}
                                isActive={chat.isActive}
                                image={require('../../../assets/images/profile.png')}
                                name={chat.name}
                                description={chat.description}
                                lastChat={chat.lastChat}
                            />
                        ))}
                    </ScrollContainer>
                </ul>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  ${props => props.theme.device.desktop} {
    width: 380px;
  }
  width: 100%;
`;

const TabTitle = styled.h5`
  font-size: 14px;
  margin-bottom: 1rem;
`;

const ScrollContainer = styled.div`
  position: relative;
  overflow: scroll;
  overflow-anchor: none;
  height: auto;
  margin-bottom: 50px;
  touch-action: auto;

  ${props => props.theme.device.desktop} {
    height: 450px;
  }
`;

export default ChatLeftSide;
