import { useFollowerList } from '@/core/domains/follower/follower.hooks';
import {
  Box,
  Card,
  Stack,
  Skeleton,
  Text,
  Title,
  TextInput,
  Group,
  Avatar,
} from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';

const FollowerList: React.FC = () => {
  const [user, setUser] = useDebouncedState('SENAI-ISTIC', 1000);

  const { data: followers, isLoading } = useFollowerList(user);

  return (
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

          {!followers?.length && <Text>Não há seguidores</Text>}

          {followers?.map((repo) => (
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
              <Group noWrap mb="xl">
                <Avatar src={repo.avatar_url} />

                <Title order={2}>{repo.login}</Title>
              </Group>
              <Text lineClamp={1}>{repo.url}</Text>
            </Card>
          ))}
        </Stack>
      </Skeleton>
    </Box>
  );
};

export default FollowerList;
