import { useEffect, useState } from "react";
import useAppStore from "../config/store";

const useAuth = () => {
  const [hasToken, setHasToken] = useState<boolean | undefined>(undefined);
  const { token } = useAppStore();

  useEffect(() => {
    if (token) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, [token]);

  if (hasToken === undefined) {
    return undefined;
  } else if (hasToken === true) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
