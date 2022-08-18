import { useAuth } from '@/core/contexts/auth';
import { Button, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { RiLoginBoxLine } from 'react-icons/ri';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { setSession } = useAuth();
  const form = useForm<LoginFormValues>({
    initialValues: { email: '', password: '' },
    validate: {
      email: (value) => (!value ? 'Preencha o campo' : null),
      password: (value) => (!value ? 'Preencha o campo' : null),
    },
  });

  function handleSubmit(values: LoginFormValues) {
    // TODO: Implementar aqui requisição para autenticar
    setSession({
      user: {
        id: '1',
        name: 'Nome do usuário',
        email: values.email,
      },
      tokens: {
        accessToken: '123',
        refreshToken: '123',
        tokenType: 'Bearer',
        expirateAt: 1234578,
        idToken: null,
      },
    });
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          name="email"
          label="E-mail"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          name="password"
          label="Senha"
          {...form.getInputProps('password')}
        />

        <Button leftIcon={<RiLoginBoxLine />} type="submit">
          Acessar
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
