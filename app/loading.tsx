import React from "react";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <VStack
      align="center"
      justify="center"
      height="100vh"
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Spinner
          size="xl"
          color="purple.500"
        />
      </Box>
      <Text
        fontSize="lg"
        color={{ base: "gray.700", _dark: "gray.300" }}
        mt={4}
      >
        Loading, please wait...
      </Text>
    </VStack>
  );
};

export default Loading;
