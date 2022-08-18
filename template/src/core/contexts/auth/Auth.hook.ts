import { useContext } from 'react';
import { AuthContext } from './Auth.provider';
import { AuthContextParams } from './Auth.types';

export function useAuth<U = unknown, T = unknown>() {
  const context = useContext(AuthContext);

  return context as AuthContextParams<U, T>;
}
