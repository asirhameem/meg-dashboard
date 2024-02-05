import { useEffect } from "react";
import { useLazyLogoutQuery } from "../store/features/auth/authApi";

const Dashboard = () => {
  const [logout, { data, isLoading, error }] = useLazyLogoutQuery();

  useEffect(() => {
    console.log({
      data,
      error,
      isLoading,
    });
  }, [data, error, isLoading]);

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      Dashboard
      <button
        className="bg-black text-white rounded px-2 py-1"
        onClick={handleLogout}
      >
        logout
      </button>
    </>
  );
};
export default Dashboard;
