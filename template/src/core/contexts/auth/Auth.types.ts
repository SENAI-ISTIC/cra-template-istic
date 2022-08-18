/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from 'react';

export type AuthProviderProps = PropsWithChildren<{
  session?: Session;
  storage?: AuthStorage;
}>;

export interface AuthStorage {
  set: (session?: SessionState) => void;
  get: () => SessionState;
}

export interface AuthContextParams<U = any, T = any> {
  session: Session<U, T> | null;
  setSession: (session?: SessionState<U, T>) => void;
  state: AuthStateTypes;
}

export type AuthStateTypes = 'AUTHENTICATED' | 'UNAUTHENTICATED' | 'LOADING';

export enum AuthState {
  AUTHENTICATED = 'AUTHENTICATED',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  LOADING = 'LOADING',
}

interface Tokens {
  accessToken: string;
  tokenType: string;
  refreshToken: string;
  idToken: string | null;
  expirateAt: number;
}

interface User extends Record<string, any> {
  id: string;
  name: string;
  email: string;
}

export interface Session<U = unknown, T = unknown> {
  user: U extends unknown ? User : U;
  tokens: T extends unknown ? Tokens : T;
}

export type SessionState<U = unknown, T = unknown> = Session<U, T> | null;
