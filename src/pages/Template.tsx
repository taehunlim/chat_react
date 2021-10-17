import React from 'react';
import ChatRoom from "../components/templates/ChatRoom";

const Template = () => {
    const chatData = [
        {
            room: {
                name: "jordan",
                userId: 0,
            },
            content: [
                { userId: 0, RoomName: "jordan", id: 0, date: "yesterday", sender: "someone", name: "jordan", content: "내용"},
                { userId: 0, RoomName: "jordan", id: 1 ,date: "today", sender: "me", name: "Me", content: "내용"},
                { userId: 0, RoomName: "jordan", id: 2, date: "today", sender: "me", name: "Me", content: "내용"},
                { userId: 0, RoomName: "jordan", id: 3, date: "today", sender: "me", name: "Me", content: "내용"},
                { userId: 0, RoomName: "jordan", id: 4, date: "tomorrow", sender: "someone", name: "이름", content: "내용"},
            ]
        },
        {
            room: {
                name: "jackson",
                userId: 1,
            },
            content: [
                { userId: 1, RoomName: "jackson", id: 0, date: "yesterday", sender: "someone", name: "jackson", content: "머해"},
            ]
        },
        {
            room: {
                name: "andrew",
                userId: 2,
            },
            content: [
                { userId: 2, RoomName: "andrew", id: 0 ,date: "today", sender: "me", name: "Me", content: "머해"},
                { userId: 2, RoomName: "andrew", id: 1, date: "today", sender: "me", name: "Me", content: "자니"},
            ]
        },
        {
            room: {
                name: "tom",
                userId: 3,
            },
            content: [
                { userId: 3, RoomName: "tom", id: 0, date: "today", sender: "me", name: "Me", content: "안녕"},
                { userId: 3, RoomName: "tom", id: 1, date: "tomorrow", sender: "someone", name: "이름", content: "시러요"}
            ]
        },
    ]



    const listData = [
        { id: 0, isActive: true, name: "jordan", description: "basketball", lastChat: "1 min" },
        { id: 1, isActive: false, name: "jackson", description: "dance", lastChat: "12 min" },
        { id: 2, isActive: true, name: "andrew", description: "cat", lastChat: "45 min" },
        { id: 3, isActive: false, name: "tom", description: "tomato", lastChat: "53 day" },
    ];
    return (
        <ChatRoom listData={listData} chatData={chatData}/>
    );
};

export default Template;
