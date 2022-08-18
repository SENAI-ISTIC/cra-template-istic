import { createContext, useEffect, useState } from 'react';
import { STORAGE_ERROR_MESSAGE } from './Auth.constants';
import { authGetStorage, authSetStorage } from './Auth.storage';
import {
  AuthContextParams,
  AuthProviderProps,
  AuthState,
  Session,
  SessionState,
} from './Auth.types';

export const AuthContext = createContext(
  {} as AuthContextParams<unknown, unknown>,
);

const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [session, handleSession] = useState<Session | null>(null);
  const [state, setState] = useState<AuthState>(AuthState.UNAUTHENTICATED);

  useEffect(() => {
    getSession();
  }, [props]);

  async function setSession(session?: SessionState) {
    setState(AuthState.LOADING);

    if (props.storage?.set && !props.storage?.get) {
      throw new Error(STORAGE_ERROR_MESSAGE);
    }

    if (props.storage?.set) {
      props.storage.set(session);
    } else {
      await authSetStorage(session);
    }

    handleSession(session || null);

    if (!session) {
      setState(AuthState.UNAUTHENTICATED);
    } else {
      setState(AuthState.AUTHENTICATED);
    }
  }

  async function getSession() {
    setState(AuthState.LOADING);

    let sessionStorage: SessionState;

    if (!props.storage?.set && props.storage?.get) {
      throw new Error(STORAGE_ERROR_MESSAGE);
    }

    if (props.storage?.get) {
      sessionStorage = props.storage.get();
    } else {
      sessionStorage = await authGetStorage();
    }

    handleSession(sessionStorage);

    if (!sessionStorage) {
      setState(AuthState.UNAUTHENTICATED);
    } else {
      setState(AuthState.AUTHENTICATED);
    }
  }

  return (
    <AuthContext.Provider value={{ session, setSession, state }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
