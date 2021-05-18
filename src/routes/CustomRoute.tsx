import { useAuth } from '../context/AuthContext';
import { Redirect, Route, RouteProps } from 'react-router-dom';
interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

function CustomRoute({
  isPrivate = false,
  component: Component,
  ...rest
}: CustomRouteProps) {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default CustomRoute;
