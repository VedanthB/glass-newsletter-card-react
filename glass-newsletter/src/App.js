import "./App.css";
import styled from "styled-components";
import { NewsLetter } from "./components/newsLetter";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(81, 103, 134);
  background: linear-gradient(
    180deg,
    rgba(81, 103, 134, 1) 21%,
    rgba(28, 29, 45, 1) 100%
  );
`;

function App() {
  return (
    <AppContainer>
      <NewsLetter />
    </AppContainer>
  );
}

export default App;
