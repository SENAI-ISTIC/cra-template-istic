import { RouteParams } from '@/core/routes/types';
import { Navbar, UnstyledButton, Group, Text } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router';
import { useRoutes } from 'react-router-context';

const PrivateNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [routes] = useRoutes<RouteParams>(['app']);

  return (
    <Navbar width={{ base: 250 }}>
      {routes?.children
        ?.filter(
          ({ params }) =>
            typeof params?.hidden !== 'boolean' || params.hidden === true,
        )
        .map((route) => {
          const path = `/app/${route.path}`;
          return (
            <UnstyledButton
              key={path}
              onClick={() => navigate(path)}
              p="md"
              sx={(theme) => ({
                backgroundColor:
                  location.pathname === path
                    ? theme.colorScheme === 'dark'
                      ? theme.colors.blue[9]
                      : theme.colors.blue[0]
                    : 'transparent',
              })}
            >
              <Group>
                {route.params?.icon}
                <Text>{route.params?.title}</Text>
              </Group>
            </UnstyledButton>
          );
        })}
    </Navbar>
  );
};

export default PrivateNav;
