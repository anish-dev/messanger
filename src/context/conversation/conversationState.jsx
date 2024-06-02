import { useState } from "react";
import ConversationContext from "./conversationContext";
import { contactList } from "../../Data";

const ConversationState = (props) => {
    const [user, setUser] = useState(contactList[0]);
    const updateUser = (user) => {
        setUser(user);
    }
    return (
        <ConversationContext.Provider value={{user, updateUser}}>
            {props.children}
        </ConversationContext.Provider>
    )
}

export default ConversationState;