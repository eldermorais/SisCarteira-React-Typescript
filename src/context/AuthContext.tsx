import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import api from '../services/api';

interface SignInCredentials {
  identifier: string;
  password: string;
}
interface RoleProps {
  id: number;
  name: string;
  description: string;
  type: string;
}

export interface UserProps {
  email: string;
  id: string;
  username: string;
  confirmed: boolean;
  blocked: boolean;
  role: RoleProps;
  displayName: string;
  matricula: string;
  setor: string;
}

interface AuthState {
  jwt: string;
  user: UserProps;
}

interface AuthContextData {
  user: UserProps;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  jwt: string;
  loading: boolean;
  updateUser: (user: UserProps) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<AuthState>(() => {
    const jwt = localStorage.getItem('@SisCarteira:jwt');
    const user = localStorage.getItem('@SisCarteira:user');

    if (jwt && user) {
      api.defaults.headers.authorization = `Bearer ${jwt}`;

      return { jwt, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ identifier, password }) => {
    setLoading(true);
    const response = await api.post<AuthState>('auth/local', {
      identifier,
      password,
    });
    setLoading(false);

    const { jwt, user } = response.data;
    api.defaults.headers.authorization = `Bearer ${jwt}`;

    setData({ jwt, user });

    localStorage.setItem('@SisCarteira:jwt', jwt);
    localStorage.setItem('@SisCarteira:user', JSON.stringify(user));
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SisCarteira:jwt');
    localStorage.removeItem('@SisCarteira:user');
    api.defaults.headers.authorization = '';

    setData({} as AuthState);
  }, [data, setData]);

  const updateUser = useCallback(
    (user: UserProps) => {
      setData({ user, jwt: data.jwt });
      localStorage.setItem('@SisCarteira:user', JSON.stringify(user));
    },
    [setData],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        jwt: data.jwt,
        signOut,
        loading: loading,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export { useAuth, AuthProvider };
