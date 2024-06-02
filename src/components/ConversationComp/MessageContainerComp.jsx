import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #e5ddd6;
`;

const MessageDiv = styled.div`
  justify-content: ${(props) => (props.$isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 16px;
`;

const Message = styled.div`
  background: ${(props) => (props.$isYours ? "#daf8cb" : "white")};
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 19px;
`;

const MessageContainerComp = ({ messageList }) => {
  return (
    <MessageContainer>
      {messageList.length > 0 && messageList.map((messageData, index) => (
        <MessageDiv key={index} $isYours={messageData.senderID === 0}>
          <Message $isYours={messageData.senderID === 0}>
            {[messageData.text]}{" "}
          </Message>
        </MessageDiv>
      ))}
    </MessageContainer>
  );
};

export default MessageContainerComp;
