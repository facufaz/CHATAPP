import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {

    const { userChats, isUserChatsLoading, userChatsError } = useContext( ChatContext);
   
       
    // if (isUserChatsLoading) {
    //     return <>Loading...</>;
    // }

    // if (userChatsError) {
    //     return <>Error: {userChatsError.message}</>;
    // }

    // if (userChats === null) {
    //     return <>Chat data is not available.</>;
    // }

    console.log("UserChats", userChats);

    return <>Chat content here</>;
};



 
export default Chat;