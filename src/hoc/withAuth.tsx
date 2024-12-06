import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { setCookie } from '@/utils/index';
import { useAuth0 } from '@auth0/auth0-react';
import useUpdateEffect from '@/utils/hooks/useUpdateEffect';
import LoadingComponent from "@/components/loading/LoadingComponent"

const withAuth = <P extends object>(Component: ComponentType<P>): React.FC<P> => (props: P) => {
  const { isLoading, isAuthenticated, user } = useAuth0();

  useUpdateEffect(() => {
    if (user?.email) {
      setCookie('id_token', JSON.stringify(user));
      saveUserInfo(user);
    }
  }, [user]);

  const saveUserInfo = (user: Record<string, any>) => {
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  if (isLoading) {
    return <LoadingComponent loading={isAuthenticated} />;
  }

  return isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />;
};

export default withAuth;
