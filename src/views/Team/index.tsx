import {
  Flex,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { useAppContext } from '../../context';
import Background from '../../assets/team-section/city-silhouette.svg';
import DaniImage from '../../assets/team-section/dani.jpeg';
import ConnanImage from '../../assets/team-section/connan.jpeg';
import FacuImage from '../../assets/team-section/facu.jpeg';
import MattImage from '../../assets/team-section/matt.jpeg';

function Team(): JSX.Element {
  const { team: teamRef } = useAppContext()!;
  const team = [
    {
      name: 'Dani Esquinazi',
      jobTitle: 'Frontend Developer',
      image: DaniImage,
    },
    {
      name: 'Matias Novoa',
      jobTitle: 'Frontend Developer',
      image: MattImage,
    },
    {
      name: 'Facundo Flores',
      jobTitle: 'Frontend Developer',
      image: FacuImage,
    },
    {
      name: 'Javier Ocampo',
      jobTitle: 'Frontend Developer',
      image: ConnanImage,
    },
  ];

  return (
    <VStack
      spacing="24px"
      backgroundImage={`url(${Background}), linear-gradient(180deg, #2C5282 0%, #63B3ED 100%)`}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      padding="3em 1em 15em 1em"
      justify="center"
      align="center"
    >
      <Heading
        color="white"
        ref={teamRef}
      >
        Team
      </Heading>
      <Flex gap="24px" flexWrap="wrap" justify="center">
        {team.map((member) => (
          <VStack
            key={member.name}
            width={['180px', '200px', '240px']}
            height={['240px', '260px', '300px']}
            backgroundImage={`url('${member.image}')`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            borderRadius="16px"
            filter="grayscale(100%)"
            justify="flex-end"
          >
            <VStack
              backgroundColor="rgba(26, 32, 44, 0.9)"
              color="white"
              padding="8px"
              width="100%"
              borderBottomRadius="16px"
              spacing="4px"
            >
              <Heading fontSize="sm">{member.name}</Heading>
              <Heading fontSize="md">{member.jobTitle}</Heading>
            </VStack>
          </VStack>
        ))}
      </Flex>
    </VStack>
  );
}

export { Team };
