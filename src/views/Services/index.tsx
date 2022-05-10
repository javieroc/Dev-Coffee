import {
  Flex,
  Heading,
  Image,
  VStack,
  Text,
  FlexProps,
} from '@chakra-ui/react';
import IdeaImage from '../../assets/service-icons/idea.png';
import DesignImage from '../../assets/service-icons/design.png';
import DevImage from '../../assets/service-icons/dev.png';
import DeployImage from '../../assets/service-icons/deploy.png';
import DevopsImage from '../../assets/service-icons/devops.png';
import CodeImage from '../../assets/service-icons/code.png';
import { useAppContext } from '../../context';

interface Props extends FlexProps {
  title: string;
  text: string;
  image: string;
  secondImage?: string;
}

function ServiceCard({
  title, text, image, secondImage, ...rest
}: Props): JSX.Element {
  return (
    <Flex
      padding="14px 24px"
      boxShadow="md"
      gap="24px"
      flexGrow={1}
      {...rest}
    >
      {secondImage && (
      <Image
        src={secondImage}
        width="250px"
        height="140px"
        display={{ base: 'none', md: 'flex' }}
      />
      )}
      <VStack align="flex-start">
        <Heading size="md">{title}</Heading>
        <Text fontSize="md">{text}</Text>
      </VStack>
      <Image
        src={image}
        boxSize="100px"
      />
    </Flex>
  );
}

function Services(): JSX.Element {
  const { services: servicesRef } = useAppContext()!;

  return (
    <VStack
      spacing="24px"
      bg="gray.200"
      padding="3em 1em"
      justify="center"
      align="center"
    >
      <Heading ref={servicesRef}>Services</Heading>
      <Flex gap={['24px', '32px']} flexWrap="wrap" maxWidth="854px">
        <ServiceCard
          title="Got an Idea"
          text="We transform your draft into a formal project!"
          backgroundColor="white"
          width={['100%', '100%', '411px']}
          image={IdeaImage}
        />
        <ServiceCard
          title="Designing"
          text="Create a prototype to visualize the product and get feedback."
          backgroundColor="white"
          image={DesignImage}
          width={['100%', '100%', '411px']}
        />
        <ServiceCard
          title="Software Development"
          text="A solution for your business by coding an Awesome application using modern technologies."
          backgroundColor="gray.600"
          color="white"
          image={DevImage}
          secondImage={CodeImage}
          width="100%"
        />
        <ServiceCard
          title="Deployment"
          text="we put your application available for your final users."
          backgroundColor="white"
          image={DeployImage}
          maxWidth={['100%', '100%', '485px']}
        />
        <ServiceCard
          title="Devops"
          text="Whole process is driven by DevOps methodology to ship faster and secure apps."
          backgroundColor="white"
          image={DevopsImage}
          maxWidth={['100%', '100%', '337px']}
        />
      </Flex>
    </VStack>
  );
}

export { Services };
