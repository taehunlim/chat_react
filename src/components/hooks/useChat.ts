import { useState, useEffect, useRef } from 'react';
import socketIoClient from "socket.io-client";

const useChat = (roomId) => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = socketIoClient('http://localhost:5000', {
            query: { roomId },
        });

        socketRef.current.on('newChatMessage', (message) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
            };
            setMessages((messages) => [...messages, incomingMessage]);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, [roomId]);

    const sendMessage = (messageBody) => {
        console.log(socketRef)
        socketRef.current.emit('newChatMessage', {
           body: messageBody,
           senderId: socketRef.current.id,
        });
    };

    return { messages, sendMessage }
};

export default useChat;