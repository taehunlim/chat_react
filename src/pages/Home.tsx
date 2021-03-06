import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import Card from "../components/molecules/Card";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import Label from "../components/atoms/Label/Label";

const Home = () => {
    const history = useHistory();
    const [roomName, setRoomName] = useState("");

    const [search, setSearch] = useState("");

    const handleRoomNameChange = (e) => {
        setRoomName(e.target.value);
    };
    return (
        <Layout>
            <Card>
                <Card.Header>
                    Chat Room List
                </Card.Header>

                <Card.Container>
                    <Column>
                        <Label
                            style={{
                                textAlign: "center",
                                marginBottom: "20px"
                            }}
                        >
                            Welcome
                        </Label>
                        <StyledInput
                            placeholder="Room Name"
                            value={roomName}
                            onChange={handleRoomNameChange}
                        />
                        <Button
                            type=""
                            onClick={() => history.push(`/${roomName}`)}
                        >
                            Join room
                        </Button>
                    </Column>
                </Card.Container>
            </Card>
        </Layout>
    )
};

const StyledInput = styled(Input)`
    margin-bottom: 30px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
`;

export default Home;