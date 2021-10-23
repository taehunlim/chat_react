import React, {useState} from 'react';

import useChat from "../components/hooks/useChat";
import Chats from "../components/molecules/Chats";
import Icon from "../components/atoms/Icon";
import Button from "../components/atoms/Button";
import styled from "@emotion/styled";

const ChatRoom = (props) => {

    const {roomId} = props.match.params;
    const {messages, sendMessage} = useChat(roomId);
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
            <Chats>
                <Chats.Header title={roomId}/>
                <Chats.Body>
                    {messages && messages.map((chat, i) => (
                        <Chats.Container key={i + "-" + chat.senderId}>
                            {messages[i - 1]?.date !==
                            messages[i]?.date && (
                                <Chats.Date date={chat.date}/>
                            )}
                            <Chats.Content
                                sender={!chat.ownedByCurrentUser && "someone"}
                                name="Someone"
                                message={chat.content}
                                time={chat.time}
                            />
                        </Chats.Container>
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
        </div>
    );
};

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

export default ChatRoom;
