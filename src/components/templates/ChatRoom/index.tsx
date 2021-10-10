import React from 'react';
import styled from "@emotion/styled";

import ChatBox from "../../organisms/ChatBox";
import ChatList from "../../organisms/ChatList";

const ChatRoom = () => {
    const chatData = [
        { id: 0, date: "yesterday", sender: "someone", name: "이름", content: "내용"},
        { id: 1 ,date: "today", sender: "me", name: "이름", content: "내용"},
        { id: 2, date: "today", sender: "me", name: "이름", content: "내용"},
        { id: 3, date: "today", sender: "me", name: "이름", content: "내용"},
        { id: 4, date: "tomorrow", sender: "someone", name: "이름", content: "내용"}
    ];

    return (
        <Wrapper>
            <ChatList/>
            <ChatBox data={chatData} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
`;

export default ChatRoom;
