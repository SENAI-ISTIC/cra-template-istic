import { Stack, Text } from '@mantine/core';

const SuspenseLoading: React.FC = () => {
  return (
    <Stack align="center" justify="center" sx={{ height: '100vh' }}>
      <Text>Carregando...</Text>
    </Stack>
  );
};

export default SuspenseLoading;
