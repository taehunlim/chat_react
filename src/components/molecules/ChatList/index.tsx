import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from "@emotion/styled";

import Image from "../../atoms/Image";

interface ChatListProps extends React.ComponentProps<"li">{
  image: string;
  name: string;
  description: string;
  lastChat: string;
  isActive?: boolean;
};

const ChatList = ({ id, isActive, image, name, description, lastChat, ...props }: ChatListProps) => {
    const location = useLocation();
    return (
        <UserList
            {...props}
            className={location.hash === `#${id}` && "active"}
        >
            <StyledLink to={`#${id}`}>
                <ListWrapper>
                    <ActiveIcon className={isActive && "isActive"}/>
                    <ProfileImage>
                        <Image width={32} src={image}/>
                    </ProfileImage>

                    <ProfileWrapper>
                        <h5>{name}</h5>
                        <p>{description}</p>
                    </ProfileWrapper>
                    <div>{lastChat} min ago</div>
                </ListWrapper>
            </StyledLink>
        </UserList>
    );
};

const ActiveIcon = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  align-self: center;
  border-radius: 25px;
  
  &.isActive {
    background-color: green;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const UserList = styled.li`
  background-color: #f8f8fb;
  
  ${props => StyledLink} {
    width: 100%;
  }
  
  &.active {
    background-color: #fff;
  }
`;

const StyledLink = styled(Link)`
  padding: 14px 16px;
`;

const ProfileImage = styled.div`
  align-self: center;
`;

const ProfileWrapper = styled.div`
  flex: 1 1;
  overflow: hidden;
  h5 {
    margin: 0 0 0.25rem;
  }
  p {
    margin: 0;
  }
`

export default ChatList;