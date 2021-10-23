import React from 'react';
import styled from "@emotion/styled";

import ChatBox from "../../organisms/ChatBox";
import ChatLeftSide from "../../organisms/ChatLeftSide";

const ChatRoom = ({listData, chatData}) => {
    return (
        <Wrapper>
            <LeftSideWrapper>
                <ChatLeftSide data={listData}/>
            </LeftSideWrapper>
            <ChatWrapper>
                <ChatBox data={chatData} />
            </ChatWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  
  ${props => props.theme.device.desktop} {
    display: flex;
    ${props => LeftSideWrapper} {
      margin-right: 1.5rem;
    }
  }
`;

const LeftSideWrapper = styled.div`
    
`;

const ChatWrapper = styled.div`
`;

export default ChatRoom;
