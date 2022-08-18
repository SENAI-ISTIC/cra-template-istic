import { Button, Stack, Text, Title } from '@mantine/core';
import { RiHome3Line } from 'react-icons/ri';
import { useNavigate } from 'react-router';

const Page404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack align="center" justify="center" sx={{ height: '100vh' }}>
      <Title>404</Title>
      <Text>Página não encontrada</Text>
      <Button leftIcon={<RiHome3Line />} onClick={() => navigate('/')}>
        Ir para home
      </Button>
    </Stack>
  );
};

export default Page404;
