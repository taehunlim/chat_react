import React from 'react';

import ChatBox from "../../organisms/ChatBox";

const ChatRoom = () => {
    const chatData = [
        { id: 0, date: "yesterday", sender: "someone", name: "이름", content: "내용"},
        { id: 1 ,date: "today", sender: "me", name: "이름", content: "내용"},
        { id: 2, date: "today", sender: "me", name: "이름", content: "내용"},
        { id: 3, date: "today", sender: "me", name: "이름", content: "내용"},
        { id: 4, date: "tomorrow", sender: "someone", name: "이름", content: "내용"}
    ];

    return (
        <div>
            <ChatBox data={chatData} />
        </div>
    );
};


export default ChatRoom;
