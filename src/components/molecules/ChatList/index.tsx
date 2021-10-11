import React from 'react';
import { Link } from 'react-router-dom';
import styled from "@emotion/styled";

import Image from "../../atoms/Image";

interface ChatListProps extends React.ComponentProps<"li">{
  image: string;
  name: string;
  description: string;
  lastChat: string;
};

const ChatList = ({ image, name, description, lastChat, ...props }: ChatListProps) => {
    return (
        <UserList
            {...props}
            className=""
        >
            <StyledLink to="#">
                <ListWrapper>
                    <div className="align-self-center mr-3">
                        "
                    </div>
                    <ProfileImage>
                        <Image width={32} src={image}/>
                    </ProfileImage>

                    <ProfileWrapper>
                        <h5 className="text-truncate font-size-14 mb-1">이름</h5>
                        <p className="text-truncate mb-0">프로필 명</p>
                    </ProfileWrapper>
                    <div
                        className="font-size-11">{lastChat} min ago</div>
                </ListWrapper>
            </StyledLink>
        </UserList>
    );
};

const ListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const UserList = styled.li`
  ${props => StyledLink} {
    width: 100%;
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