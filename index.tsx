// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import MiniKitProvider from "./minikit-provider";
import VerifyComponent from "./VerifyComponent";

const Root = () => {
  return (
    <MiniKitProvider>
      <div>
        <VerifyComponent /> {/* Componente que ejecuta el comando Verify */}
      </div>
    </MiniKitProvider>
  );
};

// Renderiza la aplicación
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Root />);
