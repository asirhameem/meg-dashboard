import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/features/auth/authSlice";

const useLocalAuthCheck = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      const authData = JSON.parse(auth);
      dispatch(setAuth(authData));
    }

    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
};

export default useLocalAuthCheck;
