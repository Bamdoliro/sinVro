import { useEffect } from 'react';
import { useUserQuery } from 'services/user/quries';
import { useUserStore } from 'stores/user/user';

const useUser = () => {
  const { user, setUser } = useUserStore();
  const { data: userData } = useUserQuery();

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [setUser, userData]);

  return { userData: user, isLoggedIn: !!user };
};

export default useUser;
