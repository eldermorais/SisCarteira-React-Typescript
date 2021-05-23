import { ReactNode } from 'react';

import { AuthProvider } from './AuthContext';
import { DeficienteProvider } from './DeficienteContext';
import { ToastProvider } from './ToastContext';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <DeficienteProvider>
        <ToastProvider>{children}</ToastProvider>
      </DeficienteProvider>
    </AuthProvider>
  );
}

export default AppProvider;
