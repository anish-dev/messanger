import { useContext, useEffect } from "react";
import styled from "styled-components";
import conversationContext from "../../context/conversation/conversationContext";

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  padding: 15px 12px;
`;
const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  color: black;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 19px;
`;

const ContactComponent = (props) => {
  const { userData } = props;
  const { updateUser, draftMsg, updateDraftMessage, user } = useContext(conversationContext);
  const onClickContactHandler = () => {
    if(draftMsg) {
      localStorage.setItem(`draft-${user.id}`, draftMsg);
      updateDraftMessage('');
    }
    updateUser(userData);
  }
  
  return (
    <>
      <ContactItem>
        <ContactInfo>
          <ContactName onClick={onClickContactHandler}>{userData.name}</ContactName>
        </ContactInfo>
      </ContactItem>
    </>
  );
};

export default ContactComponent;
