import { useLogoutUserMutation } from 'services/auth/mutations';

export const useLogoutAction = () => {
  const { logoutUserMutate } = useLogoutUserMutation();

  const handleLogout = () => {
    logoutUserMutate();
  };

  return { handleLogout };
};
