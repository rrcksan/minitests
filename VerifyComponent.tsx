// src/VerifyComponent.tsx
import React, { useState } from "react";
import {
  MiniKit,
  VerificationLevel,
  VerifyCommandInput,
} from "@worldcoin/minikit-js";

const VerifyComponent = () => {
  const [verificationResult, setVerificationResult] = useState(null); // Estado para almacenar el resultado de la verificación
  const [loading, setLoading] = useState(false); // Estado para controlar la carga
  const [error, setError] = useState<string | null>(null); // Estado para errores

  // Función para ejecutar el comando Verify
  const handleVerify = async () => {
    setLoading(true);
    setError(null);

    try {
      const verifyPayload: VerifyCommandInput = {
        action: "voting-action", // La acción que estás verificando
        verification_level: VerificationLevel.Orb, // Nivel de verificación
        signal: "0x12312", // Signal opcional (puede ser cualquier valor que quieras verificar)
      };

      // Ejecuta el comando Verify
      const payload = await MiniKit.commands.verify(verifyPayload);
      setVerificationResult(payload); // Guarda el resultado de la verificación en el estado
    } catch (err) {
      setError(`Error en la verificación: ${err.message}`); // Muestra el error si algo falla
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Comando de Verificación de MiniKit</h1>
      <button onClick={handleVerify} disabled={loading}>
        {loading ? "Verificando..." : "Iniciar Verificación"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {verificationResult && (
        <div>
          <h2>Resultado de la Verificación:</h2>
          <pre>{JSON.stringify(verificationResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default VerifyComponent;
