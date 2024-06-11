import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <FaMoon /> : <FaSun />;

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={icon}
      onClick={toggleColorMode}
      variant="ghost"
    />
  );
};

export default ColorModeSwitcher;