import React, {useState} from 'react';
import styled from "@emotion/styled";

import Tabs from "../Tabs";
import ChatList from "../../molecules/ChatList";

const ChatLeftSide = ({data}) => {
    const [currentTab, setCurrentTab] = useState({
        activeKey: "chat",
        tabName: "채팅"
    });

    return (
        <Wrapper>
            <Tabs
                defaultActiveKey={currentTab.activeKey}
                onChange={(activeKey, tabName) => {
                    setCurrentTab({
                        activeKey,
                        tabName,
                    })
                }}
            >
                <Tabs.TabPane activeKey="chat" tabName="채팅"/>
                <Tabs.TabPane activeKey="group" tabName="그룹"/>
                <Tabs.TabPane activeKey="contact" tabName="연락처"/>
            </Tabs>

            <div>
                <TabTitle>{currentTab.tabName}</TabTitle>
                <ul className="list-unstyled chat-list">
                    <ScrollContainer>
                        {currentTab.activeKey === "chat" && data.map((chat, i: number) => (
                            <ChatList
                                key={i}
                                id={chat.id}
                                isActive={chat.isActive}
                                image={require('../../../assets/images/profile.png')}
                                name={chat.name}
                                description={chat.description}
                                lastChat={chat.lastChat}
                            />
                        ))}
                    </ScrollContainer>
                </ul>
            </div>

            {/*<TabContent activeTab={activeTab} className="py-4">*/}
            {/*    <TabPane tabId="2">*/}
            {/*        <h5 className="font-size-14 mb-3">Group</h5>*/}
            {/*        <ul className="list-unstyled chat-list">*/}
            {/*            <PerfectScrollbar style={{height: "410px"}}>*/}
            {/*                {*/}
            {/*                    groups.map((group) =>*/}
            {/*                        <li key={"test" + group.image}>*/}
            {/*                            <Link to="#" onClick={() => {*/}
            {/*                                UserChatOpen(group.id, group.name, group.status)*/}
            {/*                            }}>*/}
            {/*                                <Media className="align-items-center">*/}
            {/*                                    <div className="avatar-xs mr-3">*/}
            {/*                                                                        <span*/}
            {/*                                                                            className="avatar-title rounded-circle bg-soft-primary text-primary">*/}
            {/*                                                                            {group.image}*/}
            {/*                                                                        </span>*/}
            {/*                                    </div>*/}

            {/*                                    <Media body>*/}
            {/*                                        <h5 className="font-size-14 mb-0">{group.name}</h5>*/}
            {/*                                    </Media>*/}
            {/*                                </Media>*/}
            {/*                            </Link>*/}
            {/*                        </li>*/}
            {/*                    )*/}
            {/*                }*/}
            {/*            </PerfectScrollbar>*/}
            {/*        </ul>*/}
            {/*    </TabPane>*/}

            {/*    <TabPane tabId="3">*/}
            {/*        <h5 className="font-size-14 mb-3">Contact</h5>*/}

            {/*        <div>*/}
            {/*            <PerfectScrollbar style={{height: "410px"}}>*/}
            {/*                {*/}
            {/*                    contacts.map((contact) =>*/}
            {/*                        <div key={"test_" + contact.category}*/}
            {/*                             className={contact.category === "A" ? "" : "mt-4"}>*/}
            {/*                            <div className="avatar-xs mb-3">*/}
            {/*                                                                <span*/}
            {/*                                                                    className="avatar-title rounded-circle bg-soft-primary text-primary">*/}
            {/*                                                                    {contact.category}*/}
            {/*                                                                </span>*/}
            {/*                            </div>*/}

            {/*                            <ul className="list-unstyled chat-list">*/}
            {/*                                {*/}
            {/*                                    contact.child.map((array) =>*/}
            {/*                                        <li key={"test" + array.id}>*/}
            {/*                                            <Link to="#" onClick={() => {*/}
            {/*                                                UserChatOpen(array.id, array.name, array.status)*/}
            {/*                                            }}>*/}
            {/*                                                <h5 className="font-size-14 mb-0">{array.name}</h5>*/}
            {/*                                            </Link>*/}
            {/*                                        </li>*/}
            {/*                                    )*/}
            {/*                                }*/}
            {/*                            </ul>*/}
            {/*                        </div>*/}
            {/*                    )*/}
            {/*                }*/}
            {/*            </PerfectScrollbar>*/}
            {/*        </div>*/}

            {/*    </TabPane>*/}
            {/*</TabContent>*/}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  min-width: 380px;
  margin-right: 1.5rem;
`;

const TabTitle = styled.h5`
  font-size: 14px;
  margin-bottom: 1rem;
`;

const ScrollContainer = styled.div`
  position: relative;
  overflow: scroll;
  overflow-anchor: none;
  height: 450px;
  touch-action: auto;
`;

export default ChatLeftSide;
