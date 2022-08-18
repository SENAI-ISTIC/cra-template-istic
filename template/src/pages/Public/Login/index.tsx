import { LoginForm } from '@/components/Login';
import { Title } from '@mantine/core';

const LoginPage: React.FC = () => {
  return (
    <>
      <Title mb="xl">Login</Title>

      <LoginForm />
    </>
  );
};

export default LoginPage;
