import React, {useState} from 'react';
import styled from "@emotion/styled";

import Tabs from "../Tabs";

const ChatList = () => {
    const [currentTab, setCurrentTab] = useState("one");
    return (
        <div>
            <Tabs defaultActiveKey={currentTab} onChange={(activeKey) => setCurrentTab(activeKey)}>
                <Tabs.Tab activeKey="one" tabName="첫"/>
                <Tabs.Tab activeKey="two" tabName="둘"/>
            </Tabs>
            <div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ChatList;
