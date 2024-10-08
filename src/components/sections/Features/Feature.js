import {
  Box,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const CheckedFeatures = ({ feature, ...rest }) => {
  return (
    <HStack mb={3} {...rest}>
      <Image
        src='https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f06cf40a52158da21570f7a_check-mark-blue-circle.svg'
        boxSize='1.2rem'
      ></Image>
      <Text as='span' fontWeight='bold'>
        {feature}
      </Text>
    </HStack>
  );
};

const Feature = ({ heading, text, features, ...rest }) => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  return (
    <GridItem background={bg} p={5} {...rest} borderRadius={5}>
      <VStack>
        <Box as='div'>
          <Heading as='h4' mb={5} size='md' opacity='0.8' mx={[5, 5, 0, 0]}>
            {heading}
          </Heading>
          <Text align='left' opacity='0.6' mb={2}>
            {text}
          </Text>
          {features && features.length > 0 && (
            <Text
              align={['center', 'center', 'left', 'left']}
              color="#ff24a4"
              fontWeight="bold"
              mb={2}
            >
              Perks of Joining the Community
            </Text>
          )}
          {features &&
            features.length > 0 &&
            features.map((feature, index) => (
              <CheckedFeatures feature={feature} key={index} />
            ))}
        </Box>
      </VStack>
    </GridItem>
  );
};

export default Feature;