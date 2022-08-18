import { useAuth } from '@/core/contexts/auth';
import {
  Header,
  Group,
  Title,
  ActionIcon,
  Button,
  useMantineColorScheme,
} from '@mantine/core';
import { RiSunLine, RiMoonLine, RiLogoutBoxRLine } from 'react-icons/ri';

const PrivateHeader: React.FC = () => {
  const { setSession } = useAuth();
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Header height={60} p="xs">
      <Group position="apart">
        <Title order={3}>React App</Title>

        <Group>
          <ActionIcon onClick={() => toggleColorScheme()}>
            {colorScheme === 'dark' ? <RiSunLine /> : <RiMoonLine />}
          </ActionIcon>

          <Button
            variant="default"
            onClick={() => setSession(undefined)}
            leftIcon={<RiLogoutBoxRLine />}
          >
            Sair
          </Button>
        </Group>
      </Group>
    </Header>
  );
};

export default PrivateHeader;
