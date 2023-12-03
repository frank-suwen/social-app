import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            {/* left hand side */}
            <Box display={{ base: "none", md: "block"}}>
                <Image src="/auth.png" h={650} alt="Phone IMG" />
            </Box>

            {/* right hand side */}
            <VStack spacing={4} align={"stretch"}>
                <AuthForm />
                <Box textAlign={"center"}>Get the app.</Box>
                <Flex gap={5} justifyContent={"center"}>
                    <Image src="/playstore.png" h={"10"} alt="Playstore LOGO" />
                    <Image src="/microsoft.png" h={"10"} alt="Microsoft LOGO" />
                </Flex>
            </VStack>
        </Container>
    </Flex>
  )
}

export default AuthPage