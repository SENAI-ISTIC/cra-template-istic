import { FollowerList } from '@/components/Follower';
import { Box, Title } from '@mantine/core';

const FallowersPage: React.FC = () => {
  return (
    <Box>
      <Title>Seguidores</Title>

      <FollowerList />
    </Box>
  );
};

export default FallowersPage;
