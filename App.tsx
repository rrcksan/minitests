// App.tsx
import React from "react";
import MiniKitProvider from "./minikit-provider";
import YourComponent from "./YourComponent";

const App = () => {
  return (
    <MiniKitProvider>
      <YourComponent />
    </MiniKitProvider>
  );
};

export default App;
