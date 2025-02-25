import { useEffect } from "react";
import { IReactChildren } from "../interfaces";
import { decryptData } from "../helpers";
import useAppStore from "../config/store";

export const Auth = ({ children }: IReactChildren) => {
  const { setAuth } = useAppStore();
  useEffect(() => {
    const auth = localStorage.getItem("meg-auth");

    if (auth) {
      const decryptAuth = decryptData(auth);
      const parsedAuth = JSON.parse(decryptAuth);
      setAuth(parsedAuth);
    }
  }, []);

  return <>{children}</>;
};
