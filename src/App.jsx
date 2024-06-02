import styled from "styled-components";
import ContactListComponent from "./components/ContactComponent/ContactListComp";
import ConversationComponent from "./components/ConversationComp/ConversationComp";
import ConversationState from "./context/conversation/conversationState";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background: #f8f9fb;
`;
function App() {
  return (
    <Container>
      <ConversationState>
        <ContactListComponent />
        <ConversationComponent />
      </ConversationState>
    </Container>
  );
}

export default App;
