import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.xl">
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">My Personal Blog</Heading>
        <Flex as="nav">
          <Link href="/" mx={2}>Home</Link>
          <Link href="/about" mx={2}>About</Link>
          <Link href="/blog" mx={2}>Blog</Link>
          <Link href="/new-post" mx={2}>New Post</Link>
        </Flex>
      </Flex>

      <Box as="main" py={8}>
        <Heading as="h2" size="md" mb={4}>Blog Posts</Heading>
        <VStack spacing={4} align="stretch">
          {posts.length === 0 ? (
            <Text>No blog posts available.</Text>
          ) : (
            posts.map((post, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">{post.title}</Heading>
                <Text>by {post.author}</Text>
                <Text mt={2}>{post.content}</Text>
              </Box>
            ))
          )}
        </VStack>
      </Box>

      <Box as="footer" py={4} borderTop="1px" borderColor="gray.200" textAlign="center">
        <Text>© 2023 My Personal Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Blog;