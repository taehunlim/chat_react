import React from 'react';
import styled from "@emotion/styled";

import ChatBox from "../../organisms/ChatBox";
import ChatLeftSide from "../../organisms/ChatLeftSide";

const ChatRoom = ({listData, chatData}) => {
    return (
        <Wrapper>
            <ChatLeftSide data={listData}/>
            <ChatBox data={chatData} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
`;

export default ChatRoom;
