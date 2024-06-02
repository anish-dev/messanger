import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import InputBoxComp from "../CommonComponents/InputBoxComp";
import MessageContainerComp from "./MessageContainerComp";
import conversationContext from "../../context/conversation/conversationContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 2;
  background: #f6f7f8;
`;
const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 15px;
  color: black;
  align-items: center;
  gap: 10px;
`;

const ChatBox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;

const ConversationComponent = () => {
  const { user } = useContext(conversationContext);
  let messages = JSON.parse(localStorage.getItem(user.id));
  const [chatList, setChatList] = useState(null);
  const onMessageSubmit = (event) => {
    let updatedChatList = [...chatList];
    updatedChatList.push({
      text: event.target.value,
      senderID: 0,
    });
    localStorage.setItem(user.id.toString(), JSON.stringify(updatedChatList));
    setChatList(updatedChatList);
  };
  useEffect(() => {
    setChatList(messages || []);
  }, [user.id]);
  return (
    <Container>
      {chatList && (
        <>
          <ProfileHeader>{user.name}</ProfileHeader>
          <MessageContainerComp messageList={chatList} />
          <ChatBox>
            <InputBoxComp onMessageSubmitHandler={onMessageSubmit} />
          </ChatBox>
        </>
      )}
    </Container>
  );
};
export default ConversationComponent;
