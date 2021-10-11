import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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
                <ul className="list-unstyled chat-list">
                    <ScrollContainer>
                        {currentTab.activeKey === "chat" && data.map((chat, i: number) => (
                            <ChatList
                                key={i}
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
  min-width: 380px;
  margin-right: 1.5rem;
`;

const TabTitle = styled.h5`
  font-size: 14px;
  margin-bottom: 1rem;
`;

const ScrollContainer = styled.div`
  position: relative;
  overflow: scroll;
  overflow-anchor: none;
  height: 450px;
  touch-action: auto;
`;

export default ChatLeftSide;
