import React from 'react';
import {
  Flex,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { useAppContext } from '../../context';
import Background from '../../assets/team-section/city-silhouette.svg';

function Team(): JSX.Element {
  const { teamSectionRef } = useAppContext()!;
  const team = [
    {
      name: 'Dani Esquinazi',
      jobTitle: 'Frontend Developer',
      image: 'https://s3-alpha-sig.figma.com/img/76db/6676/399e758f3a20b771f660e72844a66f0b?Expires=1650240000&Signature=DIexUqrO5UFuQ4TA38BHflLbS3qfqx17UAhMIHYrObk2qgSU8PdPbsgRsie~RDC8942U-IiB3o4GQjgZl5ux28~0fwbLmYITUYCYPskpEebQXAESQ2liti5-YX3qyEV0IqFLuuhYVhah8TSROUkMJgP38Wtmj-5lxuA6qGosVG5wM8fYnkbrlW6ZkstHqGoVVLaeRGuZXnzw3m2ggRVgd9F3Su426nSwjl3JHhhOeih6QeIIgYmini4L0Gc4GJCLWdLW9~fEsHL2PWvl0QkWoQATcdIon7pHUhmoUHvK4PWcM2Gt9fHVN97CcKgHa66wN59I15mpDQ7MirZ5i5yBFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      name: 'Matias Novoa',
      jobTitle: 'Frontend Developer',
      image: 'https://s3-alpha-sig.figma.com/img/c24a/90b9/245d9ce8a916fffdfc7b52238f23f5f8?Expires=1650240000&Signature=El4RJimFhQ07kDcXvgYdvEx09IDAwLq9qlmcq4nxOGDhySGXgyhyhmj~bgxm0bDwp~Ft6nzZBQStMwIbb3f6J89zxX5fN~PiVCguO2Lnxg2P5dW1OYcHeMZnzttoa6QEQofYsSgInMC2wZr9jNP19ygsEnnAyHBvJMoL6a5fkzAyAfqmvt8scSS-LFhJkZJ1qjwFus5YS3rN8VWBly7B3k~8DIK7noJkfbYlifWRMOkBVWPio0jL1by6efhe5tquIK~yyirIUR-mbQ6iRd1VAKaH2xP2imZ9ikcDGEqcfJIwO-B3Ungx0210wSFdmyxkQJFRixWD81~DlIgb-I5IJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      name: 'Facundo Flores',
      jobTitle: 'Frontend Developer',
      image: 'https://s3-alpha-sig.figma.com/img/b168/628f/2c5e39b928a5a84b5f257c97c6be9543?Expires=1650240000&Signature=AZAzAkDoZSkycD07fAEmbewZhJs~SGakeQiB8yDZ4Z48jbWO0Il1SEEuluCk5pOo3NH~0xAIFLtQSNM5YujFSA~wesYQ0rWVOSpkhPm3E13j8jrIFo9KfgvdZQKwXiuaM~JSkhqaJTRSiGQfluDZoXAwP84zUV6wCL8WUeKaDy23k8qMh6v4vIoOAzCj~At~8JGcSPYRV4iUQLDaKzTYsJafmEHQoQ~qXhc6iH6gjP9wtsMTCBF~jnKD8N1qVFISKn8dPS9GxQLzNdRgwtQe6Oa9yj7ISLjNOonpt62IxkLQZdwW3dqwcQy6jcBXaOiawDgZ1YSG0VYDTi8ZFc0EmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      name: 'Javier Ocampo',
      jobTitle: 'Frontend Developer',
      image: 'https://s3-alpha-sig.figma.com/img/d97f/b98c/279dc2d34add1942aa9878bb4163b2d4?Expires=1650240000&Signature=blWM5bdEmTI8HQ0TnBDXz3iDUOh3YPneJ~34KDLQlsSU5XkVNnafgcQgAUSLuHaqSgkigX2ycBSQ9R76OgEi94PSYsdgCHqyMLJsXQU6Q2UqNeHGCo82Hw7j9pSNicGfumF2Fxv3YlZdGqIupv9x~AgJgnee7Ya8xgMMvUSa7PsU1c6AqbG4eKLBCHmRQV7wIi-MmGT6Veh85a~U0dbTPTWUAo6k38uc2Xk371II826QMGcR9HimTx3kKGHYMy3HtWsruEUQr3HyWqFnDr9m9S-iZ8X4xiCpaLK6Zbl28YXCHHRO3B08JxDek7W5xUWX-95qIKovuODVlMzlkUNY1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
        ref={teamSectionRef}
      >
        Team
      </Heading>
      <Flex gap="24px" flexWrap="wrap" justify="center">
        {team.map((member) => (
          <VStack
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
