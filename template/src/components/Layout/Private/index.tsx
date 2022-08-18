import { AuthState, useAuth } from '@/core/contexts/auth';
import { AppShell } from '@mantine/core';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { PrivateHeader, PrivateNav } from './components';

const LayoutPrivate: React.FC = () => {
  const { state } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (state === AuthState.UNAUTHENTICATED) {
      navigate('/');
    }
  }, [state]);

  return (
    <AppShell header={<PrivateHeader />} navbar={<PrivateNav />}>
      <Outlet />
    </AppShell>
  );
};

export default LayoutPrivate;
