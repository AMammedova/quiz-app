import React from "react";
import { Box, Text, Icon, Button, VStack } from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

const ErrorComponent = ({ message, onRetry }: { message: string; onRetry?: () => void }) => {
  return (
    <VStack
      align="center"
      justify="center"
      height="100vh"
      gap={6}
    >
      <Box display="flex" alignItems="center" justifyContent="center" color="red.500">
        <Icon as={FiAlertCircle} w={16} h={16} />
      </Box>
      <Text fontSize="xl" fontWeight="bold" color={{ base: "brand.navy", _dark: "brand.pureWhite" }}>
        Oops! Something went wrong.
      </Text>
      <Text fontSize="md" color={{ base: "brand.navy", _dark: "brand.pureWhite" }} textAlign="center">
        {message}
      </Text>
      {onRetry && (
        <Button
          colorScheme="red"
          onClick={onRetry}
          size="lg"
          variant="solid"
          mt={4}
        >
          Retry
        </Button>
      )}
    </VStack>
  );
};

export default ErrorComponent;
