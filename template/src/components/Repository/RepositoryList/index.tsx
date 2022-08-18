import { useRepositoryList } from '@/core/domains/repository/repository.hooks';
import {
  Box,
  Card,
  Stack,
  Skeleton,
  Text,
  Title,
  TextInput,
} from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';

const RepositoryList: React.FC = () => {
  const [user, setUser] = useDebouncedState('SENAI-ISTIC', 1000);

  const { data: repos, isLoading } = useRepositoryList(user);

  return (
    <Stack>
      <Title>Repositorios</Title>

      <Box style={{ minWidth: 400 }}>
        <Skeleton
          visible={isLoading}
          height={isLoading ? 200 : undefined}
          style={{ width: '100%' }}
        >
          <Stack align="flex-start">
            <TextInput
              label="Filtrar usuário"
              defaultValue={user}
              onChange={({ currentTarget }) => {
                setUser(currentTarget.value);
              }}
            />

            {!repos?.length && <Text>Não há repositórios</Text>}

            {repos?.map((repo) => (
              <Card<'a'>
                key={repo.id}
                component="a"
                href={repo.html_url}
                sx={{
                  ':hover': { opacity: 0.7 },
                  minWidth: '50%',
                  maxWidth: '50%',
                }}
                target="_blank"
              >
                <Title order={2}>{repo.name}</Title>
                <Text>{repo.description}</Text>
              </Card>
            ))}
          </Stack>
        </Skeleton>
      </Box>
    </Stack>
  );
};

export default RepositoryList;
