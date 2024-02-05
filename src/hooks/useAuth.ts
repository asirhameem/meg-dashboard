import { useSelector } from "react-redux";
import { selectAuthToken } from "../store/features/auth/authSelector";

const useAuth = () => {
  const token = useSelector(selectAuthToken);

  if (token) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
