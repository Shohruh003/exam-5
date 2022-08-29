import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const UseAuth = () => {
  const {token , setToken} = useContext(AuthContext)
  return {token , setToken}
}