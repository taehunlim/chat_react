import React, { useState } from 'react';
import useChat from "../components/hooks/useChat";

const ChatRoom = (props) => {

    const { roomId } = props.match.params;
    const { messages, sendMessage } = useChat(roomId);
    const [newMessage, setNewMessage] = useState("");

    const handleNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
      sendMessage(newMessage);
      setNewMessage("");
    };

    return (
        <div>
            <h1 className="room-name">
                Room: {roomId}
            </h1>

            <div className="messages-container">
                <ul className="messages-list">
                    {messages.map((message, i) => (
                        <li
                            key={i}
                            className={`message-item ${
                                message.ownedByCurrentUser ? "my-message" : "received-message"
                            }`}
                        >
                            {message.body}
                        </li>
                    ))}
                </ul>
            </div>
            <textarea
                value={newMessage}
                onChange={handleNewMessageChange}
                placeholder="Write message..."
                className="new-message-input-field"
            />
            <button onClick={handleSendMessage} className="send-message-button">
                Send
            </button>
        </div>
    );
};

export default ChatRoom;
