import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Heading, Link } from "@chakra-ui/react";
import ColorModeSwitcher from "./components/ColorModeSwitcher";
import Index from "./pages/Index.jsx";
import Blog from "./pages/Blog.jsx";
import NewPost from "./pages/NewPost.jsx";

function App() {
  return (
    <Router>
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">My Personal Blog</Heading>
        <Flex as="nav">
          <Link href="/" mx={2}>Home</Link>
          <Link href="/about" mx={2}>About</Link>
          <Link href="/blog" mx={2}>Blog</Link>
          <Link href="/new-post" mx={2}>New Post</Link>
        </Flex>
        <ColorModeSwitcher />
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;