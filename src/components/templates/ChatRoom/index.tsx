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

    const ListData = [
        {name: "jordan", description: "basketball", lastChat: "23 min"},
        {name: "jackson", description: "dance", lastChat: "1 min"},
        {name: "andrew", description: "cat", lastChat: "55 min"},
        {name: "tom", description: "tomato", lastChat: "33 day"},
    ];

    return (
        <Wrapper>
            <ChatList data={ListData}/>
            <ChatBox data={chatData} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
`;

export default ChatRoom;
