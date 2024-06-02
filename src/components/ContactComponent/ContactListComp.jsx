import styled from "styled-components";
import ContactComponent from "./ContactComponent"
import { contactList } from "../../Data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 0.8;
`;

const ContactListComponent = () => {
  return (
    <Container>
      {contactList.map((userData) => (
        <ContactComponent key={userData.id} userData={userData} />
      ))}
    </Container>
  );
};

export default ContactListComponent;
