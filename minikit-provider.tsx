// src/minikit-provider.tsx
"use client"; // Solo si usas Next.js

import { ReactNode, useEffect } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

// Componente que instalará MiniKit
export default function MiniKitProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    MiniKit.install(); // Instala el SDK de MiniKit cuando se monta el componente
  }, []);

  return <>{children}</>;
}
