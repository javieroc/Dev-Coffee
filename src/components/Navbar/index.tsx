import {
  Flex, Menu, MenuButton, MenuList, MenuItem, Text, Button,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useAppContext } from '../../context';

function Navbar(): JSX.Element {
  const {
    services, projects, team, contactUs,
  } = useAppContext()!;

  const links = [
    {
      label: 'Services',
      action: () => {
        services.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Projects',
      action: () => {
        projects.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Team',
      action: () => {
        team.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      label: 'Contact Us',
      action: () => {
        contactUs.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1em"
    >
      <Flex bg="rgb(247,250,252, .85)" padding="4px" borderRadius="4px">
        <Text fontSize="xl" color="orange.400">Dev</Text>
        <Text fontSize="xl" color="gray.400">&</Text>
        <Text fontSize="xl" color="black">Coffee</Text>
      </Flex>

      <Menu>
        <MenuButton
          as={Button}
          color="white"
          backgroundColor="blackAlpha.700"
          _hover={{
            color: 'white',
            backgroundColor: 'blackAlpha.700',
          }}
          aria-label="open menu"
          display={{ base: 'flex', md: 'none' }}
        >
          <FiMenu />
        </MenuButton>
        <MenuList
          display="flex"
          flexDirection="column"
        >
          {links.map((link) => (
            <MenuItem
              key={link.label}
              onClick={link.action}
            >
              {link.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Flex display={{ base: 'none', md: 'flex' }}>
        {links.map((link) => (
          <Text
            key={link.label}
            border="2px solid #2D3748"
            borderRadius="4px"
            backgroundColor="gray.50"
            padding="4px 8px"
            color="gray.700"
            fontWeight="bold"
            margin="0 4px"
            cursor="pointer"
            onClick={link.action}
            _hover={{
              backgroundColor: 'gray.100',
            }}
          >
            {link.label}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}

export { Navbar };
