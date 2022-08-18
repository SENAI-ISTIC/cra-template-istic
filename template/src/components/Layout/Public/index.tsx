import { AuthState, useAuth } from '@/core/contexts/auth';
import { Box, Stack } from '@mantine/core';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

const LayoutPublic: React.FC = () => {
  const { state } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (state === AuthState.AUTHENTICATED) {
      navigate('/app');
    }
  }, [state]);

  if (state === AuthState.AUTHENTICATED || state === AuthState.LOADING)
    return null;

  return (
    <Stack align="center" justify="center" style={{ height: '100vh' }}>
      <Box>
        <Outlet />
      </Box>
    </Stack>
  );
};

export default LayoutPublic;
