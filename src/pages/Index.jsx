import React, { useState } from "react";
import { ChakraProvider, Container, VStack, Grid, Button, Input, theme } from "@chakra-ui/react";
import { FaBackspace } from "react-icons/fa";

const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"];

const Index = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (e) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.sm" centerContent>
        <VStack spacing={4} my={10}>
          <Input value={input} placeholder="Enter calculation" size="lg" readOnly />
          <Grid templateColumns="repeat(4, 1fr)" gap={2}>
            {buttons.map((button) => (
              <Button key={button} onClick={() => handleButtonClick(button)} colorScheme="teal" variant="solid" fontSize="lg">
                {button}
              </Button>
            ))}
            <Button onClick={handleBackspace} colorScheme="orange" colSpan={2}>
              <FaBackspace />
            </Button>
            <Button onClick={handleClear} colorScheme="red" colSpan={2}>
              C
            </Button>
          </Grid>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
