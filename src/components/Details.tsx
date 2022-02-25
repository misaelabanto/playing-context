import { FC } from "react";
import { useAccountContext } from "../hooks/useAccountContext";

export const Details: FC = () => {
  const { state: account } = useAccountContext()
  return <div>
    <h1>Detalles de la cuenta</h1>
    El nombre de la cuenta es: {account?.accountName}
    <br />
    <button> Crear ahora</button>
  </div>
}