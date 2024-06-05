import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import conversationContext from "../../context/conversation/conversationContext";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 20px 0;
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: 15px;
  font-size: 17px;
  margin-left: 10px;
  background: none;
  color: black;
`;

const InputBoxComp = ({ onMessageSubmitHandler, draft, user }) => {
  const [text, setText] = useState(draft);
  const { updateDraftMessage } = useContext(conversationContext);
  const onEnterHandler = (e) => {
    if (e.keyCode === 13) {
      onMessageSubmitHandler(e);
      setText("");
    }
  };

  return (
    <InputContainer>
      <Input
        placeholder="Type a message"
        onKeyDown={onEnterHandler}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          updateDraftMessage(e.target.value);
        }}
      />
    </InputContainer>
  );
};

export default InputBoxComp;
