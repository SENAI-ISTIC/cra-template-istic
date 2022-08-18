import { Button } from '@mantine/core';
import { RiCloseLine } from 'react-icons/ri';

const ButtonWithIcon: React.FC = () => {
  return <Button leftIcon={<RiCloseLine />}>Button com icone</Button>;
};

export default ButtonWithIcon;
