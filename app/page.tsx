import HomePage from "@/page/home/HomePage";
import { Header } from "@/shared/components/Header";
import { Box} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w={{ base: "100%", lg: "80%" }} margin={"0 auto"}>
      <Header />
      <HomePage />
    </Box>
  );
}
