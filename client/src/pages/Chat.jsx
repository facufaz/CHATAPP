/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/UserChat";
import {AuthContext} from "../context/AuthContext";

const Chat = () => {

    const { user } = useContext( AuthContext);
    const { userChats, isUserChatsLoading, userChatsError } = useContext( ChatContext );
  console.log("userchats", userChats);
  
  return (
    <Container>
        {userChats ? (
            userChats.length > 0 ? ( 
                <Stack direction="horizontal" gap={4} className="align-items-start">
                    <Stack className="message-box flex-grow-0 pe-3" gap={3}>
                        {isUserChatsLoading && <p>Loading Chats...</p>}
                        {userChats.map((chat, index) => (
                            <div key={index}>
                                <UserChat chat={chat} user={user} />
                            </div>
                        ))}
                    </Stack>
                    <p>ChatBox</p>
                </Stack>
            ) : (
                <p>No chats available</p>
            )
        ) : (
            <p>Loading user chats...</p>
        )}
    </Container>
);}

 
export default Chat;