import { MantineConfigProvider } from '@/core/configs/mantine';
import queryClient, { QueryClientProvider } from '@/core/configs/react-query';
import { AuthProvider } from '@/core/contexts/auth';
import routes from '@/core/routes';
import { ReactRouterContext as RouterProvider } from 'react-router-context';

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <MantineConfigProvider>
          <RouterProvider routes={routes} />
        </MantineConfigProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
