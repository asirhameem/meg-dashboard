import { useNavigate } from 'react-router-dom';
import useAppStore from '../config/store';
import { APP_URL } from '../constants';

export const useAuthClear = () => {
  const { removeAuth } = useAppStore();
  const navigate = useNavigate();

  const onLogout = () => {
    removeAuth();
    navigate(APP_URL.SIGN_IN);
  }
  return {
    onLogout,
  }
}
