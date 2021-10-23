import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import styled from "@emotion/styled";

import Chats from "../../molecules/Chats";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";

const ChatBox = ({data}) => {
    const location = useLocation();

    const [newMessage, setNewMessage] = useState("");

    const handleNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        setNewMessage("");
    };

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
                        <InputSection>
                            <Container>
                                <StyledInput
                                    value={newMessage}
                                    onChange={handleNewMessageChange}
                                    placeholder="Write message..."
                                    className="new-message-input-field"
                                />
                                <ChatActions>
                                    <ul>
                                        <li>
                                            <Icon icon="emoji"height={16}/>
                                        </li>
                                        <li>
                                            <Icon icon="upload-file" height={16}/>
                                        </li>
                                    </ul>
                                </ChatActions>

                            </Container>
                            <StyledButton primary type="submit" onClick={handleSendMessage} className="send-message-button">
                                Send
                            </StyledButton>
                        </InputSection>
                    </Chats>
                )
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
`;

const InputSection = styled.div`
  display: flex;
  border-top: 1px solid #eff2f7;
  padding: 1rem;
  justify-content: space-between;
  width: 100%;
  align-items: center;

`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  
  width: 75%;
`;

const StyledButton = styled(Button)`
  height: calc(1.5em + 0.94rem + 2px);
  box-shadow: none;
  border-radius: 30px;
  width: calc(25% - 16px);
  max-width: 120px;
`;

const StyledInput = styled.textarea`
  border-radius: 30px;
  background-color: #eff2f7;
  background-clip: padding-box;
  border: 1px solid #eff2f7;
  height: calc(1.5em + 0.94rem + 2px);
  padding: 0.47rem 60px 0.47rem 0.75rem;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  color: #495057;
  resize: none;
`;

const ChatActions = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  
  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
  };
  
  li {
    margin-right: 0.5rem;
    display: flex;
    :last-child {
      margin-right: 0;
    }
  }
`;

export default ChatBox;
