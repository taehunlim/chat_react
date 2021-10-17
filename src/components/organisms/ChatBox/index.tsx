import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "@emotion/styled";

import Chats from "../../molecules/Chats";

const ChatBox = ({data}) => {
    const location = useLocation();
    return (
        <Wrapper>
            {data && data.map((chats, i:number) => (
                `#${chats.room.userId}` === location.hash && (
                    <Chats key={i}>
                        <Chats.Header title={chats.room.name}/>
                        <Chats.Body>
                            {chats && chats.content.map((chat) => (
                                `#${chat.userId}` === location.hash && (
                                    <Chats.Container key={chat.id}>
                                        {chats.content[chat.id - 1]?.date !==
                                        chats.content[chat.id]?.date && (
                                            <Chats.Date date={chat.date}/>
                                        )}
                                        <Chats.Content
                                            sender={chat.sender}
                                            name={chat.name}
                                            message={chat.content}
                                            time="12:30"
                                        />
                                    </Chats.Container>
                                )
                            ))}
                        </Chats.Body>
                    </Chats>
                )
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default ChatBox;
