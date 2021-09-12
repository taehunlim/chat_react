import React, { useState } from 'react';
import useChat from "../components/customHook/useChat";

const ChatRoom = (props) => {
    const { roomId } = props.match.params;
    const { messages, sendMessage } = useChat(roomId);

    return (
        <div>
            <h1 className="room-name">
                Room: {roomId}
            </h1>
        </div>
    );
};

export default ChatRoom;
