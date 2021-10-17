import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';

import Card from "../../molecules/Card";
import Icon from "../../atoms/Icon/index";

const tada = keyframes`
  0% {-webkit-transform: scale(1);}
  10%, 20% {-webkit-transform: scale(1) rotate(-10deg);}
  30%, 50%, 70%, 90% {-webkit-transform: scale(1) rotate(10deg);}
  40%, 60%, 80% {-webkit-transform: scale(1) rotate(-10deg);}
  100% {-webkit-transform: scale(1) rotate(0);}
`;

const ChatBox = ({data}) => {
    const location = useLocation();
    return (
        <Wrapper>
            {data && data.map((chats, i:number) => (
                `#${chats.room.userId}` === location.hash && (
                    <Card key={i}>
                        <StyledHeader>
                            {chats.room.name}
                            <div>
                                <StyledIcon icon="bell"/>
                                <Icon icon="bell"/>
                                <Icon icon="bell"/>
                            </div>
                        </StyledHeader>

                        <Card.Container>
                            <ChatContent>
                                {chats && chats.content.map((chat) => (
                                    `#${chat.userId}` === location.hash && (
                                        <Container key={chat.id}>
                                            {chats.content[chat.id - 1]?.date !==
                                            chats.content[chat.id]?.date && (
                                                <li>

                                                    <ChatDay>
                                                        <span>{chat.date}</span>
                                                    </ChatDay>

                                                </li>
                                            )}
                                            <li>
                                                <ChatWrapper className={chat.sender}>
                                                    <MenuIcon icon="menu-dot" />
                                                    <Chat>
                                                        <SenderName>
                                                            {chat.name}
                                                        </SenderName>
                                                        <p>
                                                            {chat.content}
                                                        </p>
                                                        <ChatTime>
                                                            12:30
                                                        </ChatTime>
                                                    </Chat>
                                                </ChatWrapper>
                                            </li>
                                        </Container>
                                    )
                                ))}
                            </ChatContent>

                        </Card.Container>
                    </Card>
                )
            ))}

        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
`;

const StyledHeader = styled(Card.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatWrapper = styled.div`
  float: right;
  display: inline-block;
  position: relative;

  &.someone {
    float: left;

    ${props => Chat} {
      border-radius: 8px 8px 8px 0px;
      background-color: rgba(85, 110, 230, 0.1);
    }

    ${props => MenuIcon} {
      float: right;
    }
  }
`;

const StyledIcon = styled(Icon)`
  animation: ${tada} 1.5s ease infinite;
`;

const ChatDay = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 24px;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    right: 0;
    background-color: #eff2f7;
    top: 10px;
  }

  span {
    background-color: #fff;
    position: relative;
    z-index: 1;
    padding: 6px 24px;
  }
`;

const Chat = styled.div`
  float: right;
  display: inline-block;
  background-color: #eff2f7;
  text-align: right;
  border-radius: 8px 8px 0px 8px;
  padding: 12px 24px;
  margin-bottom: 20px;
`;

const SenderName = styled.div`
  font-weight: 600;
  color: #556ee6;
  margin-bottom: 4px;
`;

const ChatTime = styled.p`
  font-size: 12px;
`;

const MenuIcon = styled(Icon)`
  padding: 0 10px;
  float: left;
`;

const ChatContent = styled.ul`
  display: grid;
  width: 100%;
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

export default ChatBox;
