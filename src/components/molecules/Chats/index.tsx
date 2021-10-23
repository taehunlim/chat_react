import React from 'react';
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

const Header = ({title, ...props}) => {
    return (
        <ChatHeader {...props}>
            {title}
            <div>
                <StyledIcon icon="bell"/>
                <Icon icon="bell"/>
                <Icon icon="bell"/>
            </div>
        </ChatHeader>
    )
};

const Body = ({children, ...props}) => {
    return (
        <ChatContainer {...props}>
            <ChatBody>
                {children}
            </ChatBody>
        </ChatContainer>
    )
};

const Date = ({date, ...props}) => {
    return (
        <li {...props}>
            <ChatDay>
                <span>{date}</span>
            </ChatDay>
        </li>
    )
};

const Content = ({sender, name, message, time, ...props}) => {
    return (
        <li {...props}>
            <ChatWrapper className={sender}>
                <MenuIcon icon="menu-dot" />
                <Chat>
                    <SenderName>
                        {name}
                    </SenderName>
                    <p>
                        {message}
                    </p>
                    <ChatTime>
                        {time ? time : "12:30"}
                    </ChatTime>
                </Chat>
            </ChatWrapper>
        </li>
    )
};

const Chats = ({children, ...props}) => {
    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled(Card)`
  padding: 0;
`;

const ChatHeader = styled(Card.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  margin-bottom: 0;
`;

const ChatContainer = styled(Card.Container)`
  overflow: scroll;
  height: 500px;
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

const ChatBody = styled.ul`
  display: grid;
  width: 100%;
  padding: 1rem;
`;

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

Chats.Header = Header;
Chats.Body = Body;
Chats.Container = Container;
Chats.Date = Date;
Chats.Content = Content;

export default Chats;
