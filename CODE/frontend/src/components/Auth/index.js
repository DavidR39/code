import React from "react";
import { Route } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { AuthButton } from './style'
import Loader from '../Loader'

/* LOGIN BUTTON */
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <AuthButton onClick={() => loginWithRedirect()}>Se connecter</AuthButton>;
};

/* LOGOUT BUTTON */
export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <AuthButton onClick={() => logout({ returnTo: window.location.origin })}>
      Se déconnecter
    </AuthButton>
  );
};

/* USER PROFILE */
export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

/* PROTECTED ROUTE */
export const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loader />,
    })}
    {...args}
  />
);