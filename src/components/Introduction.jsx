import { Container, Heading, Text } from '@chakra-ui/react';

const Introduction = () => {
  return (
    <Container maxW='80%'>
      <Heading>Welcome to the Mixer's Lounge</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue urna vel vestibulum aliquet. Nullam vitae pharetra ex, at
        iaculis tellus. Nulla vestibulum sapien vitae finibus iaculis. Maecenas hendrerit purus eget tortor porttitor vulputate sed
        scelerisque mi. In maximus nisi eget ultricies convallis. Vestibulum commodo, ex nec venenatis viverra, nunc purus sollicitudin
        odio, eu venenatis justo lacus at lacus. Ut arcu urna, commodo sollicitudin metus non, feugiat facilisis nunc. Sed egestas felis eu
        nibh pulvinar, nec ullamcorper libero tristique. Nullam elementum nisl quis dolor aliquet, eget efficitur risus bibendum. Praesent
        volutpat, diam vitae lacinia aliquam, orci leo sollicitudin sapien, vitae lacinia sapien sem vel dolor. Nullam euismod condimentum
        posuere.
      </Text>
      <Image />
    </Container>
  );
};

export default Introduction;
