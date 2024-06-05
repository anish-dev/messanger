import { useState } from "react";
import ConversationContext from "./conversationContext";
import { contactList } from "../../Data";

const ConversationState = (props) => {
    const [user, setUser] = useState(contactList[0]);
    const [ draftMsg, setDraftMsg] = useState('');
    const updateDraftMessage = (draft) => {
        setDraftMsg(draft);
    };
    const updateUser = (user) => {
        setUser(user);
    }
    return (
        <ConversationContext.Provider value={{user, updateUser, updateDraftMessage, draftMsg}}>
            {props.children}
        </ConversationContext.Provider>
    )
}

export default ConversationState;