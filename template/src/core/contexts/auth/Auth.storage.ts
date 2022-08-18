import { AUTH_STORAGE_KEY } from './Auth.constants';
import { SessionState } from './Auth.types';

export function authSetStorage(session?: SessionState): Promise<void> {
  return new Promise<void>(async (res, rej) => {
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session ?? ''));
      res();
    } catch (error) {
      rej(error);
    }
  });
}

export function authGetStorage(): Promise<SessionState> {
  return new Promise((res, rej) => {
    try {
      const sessionStorage = localStorage.getItem(AUTH_STORAGE_KEY);

      if (!sessionStorage) return res(null);

      res(JSON.parse(sessionStorage));
    } catch (error) {
      rej(error);
    }
  });
}
