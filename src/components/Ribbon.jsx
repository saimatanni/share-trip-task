import { Ribbon, RibbonContainer,  } from "react-ribbons";

export default function Ribbon2() {
  return (
    <div className="App">
      <RibbonContainer>
        <Ribbon
        position="top-left"
          backgroundColor="#0088ff"
          color="#f0f0f0"
          fontFamily="Arial"
          display="none"
        >
          <div>Hello world</div>
        </Ribbon>
      </RibbonContainer>
    </div>
  );
}
