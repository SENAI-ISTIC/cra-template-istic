import { Button, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Stack align="center">
      <Title>Página inicial</Title>

      <Text>Clique em acessar par ir para a tela de login de exemplo</Text>

      <Button component={Link} to="/login">
        Acessar
      </Button>
    </Stack>
  );
};

export default HomePage;
