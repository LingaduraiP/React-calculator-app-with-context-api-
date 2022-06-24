import React from "react";
import Button from "./Components/Button";
import ButtonBox from "./Components/ButtonBox";
import Screen from "./Components/Screen";
import Wrapper from "./Components/Wrapper";
import CalcProvider from "./contaxt/CalcContaxt";

const btnValue = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "8", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];
function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValue.flat().map((value, i) => {
            return <Button value={value} key={i} />;
          })}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
