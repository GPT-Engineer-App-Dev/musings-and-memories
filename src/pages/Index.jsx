import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">My Personal Blog</Heading>
        <Flex as="nav">
          <Link href="/" mx={2}>Home</Link>
          <Link href="/about" mx={2}>About</Link>
          <Link href="/blog" mx={2}>Blog</Link>
        </Flex>
      </Flex>

      <Box as="main" py={8}>
        <Heading as="h2" size="md" mb={4}>Welcome to My Blog</Heading>
        <Text>This is a placeholder for blog posts. Stay tuned for updates!</Text>
      </Box>

      <Box as="footer" py={4} borderTop="1px" borderColor="gray.200" textAlign="center">
        <Text>© 2023 My Personal Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;