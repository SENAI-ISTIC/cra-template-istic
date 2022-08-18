import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

export { QueryClientProvider };

export default queryClient;
