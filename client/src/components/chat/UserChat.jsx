/* eslint-disable react/prop-types */
import { useFetchRecipientUser } from "../../hooks/useFetchRecipients";
import { Stack } from "react-bootstrap";

const UserChat = ({ chat, user }) => {
    const { recipientUser } = useFetchRecipientUser(chat, user);

    return  (
        <Stack direction="horizontal" gap={3} classname="user-card align-items-center p-2 justify-content-between">
            <div className="d-flex">
                <div className="me-2">A</div>
                <div className="text-content">
                    <div className="name">{recipientUser?.name}</div>
                    <div className="text">Text Message</div>
                </div>
            </div>
        </Stack> 
    )
}
 
export default UserChat;