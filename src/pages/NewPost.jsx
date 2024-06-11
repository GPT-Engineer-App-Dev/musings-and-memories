import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Link, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, author };
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    storedPosts.push(newPost);
    localStorage.setItem("blogPosts", JSON.stringify(storedPosts));
    navigate("/blog");
  };

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
        <Heading as="h2" size="md" mb={4}>Create a New Blog Post</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="title" mb={4} isRequired>
            <FormLabel>Title</FormLabel>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl id="content" mb={4} isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
          </FormControl>
          <FormControl id="author" mb={4} isRequired>
            <FormLabel>Author</FormLabel>
            <Input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue">Add Post</Button>
        </form>
      </Box>

      <Box as="footer" py={4} borderTop="1px" borderColor="gray.200" textAlign="center">
        <Text>© 2023 My Personal Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default NewPost;