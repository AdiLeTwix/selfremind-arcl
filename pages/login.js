import { Box, Center, Divider, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import "../styles/theme";
import theme from "../styles/theme";
import "../components/LoginForm"
import LoginForm from "../components/LoginForm";

export default function Login() {

    return (
        <div style={{
            backgroundColor: "#E2E8F0",
        }}>
            <Center height="100vh">
                <Box m={5} p={5} borderRadius="lg" backgroundColor={theme.colors.white}>
                    <Grid templateColumns='repeat(7, 1fr)'>
                        <GridItem m={5} p={5} colSpan={3}>
                            <Center height="100%">
                                <Stack spacing="0">
                                    <img src="/sigl-logo.webp" alt="Logo" width="100px" height="100px" />
                                    <Text fontSize='xl' as='b'>Chop1Hour</Text>
                                    <Text fontSize='sm'>ARCL TodoList</Text>
                                </Stack>
                            </Center>
                        </GridItem>
                        <GridItem>
                            <Center h="100%">
                                <Divider orientation='vertical' />
                            </Center>
                        </GridItem>
                        <GridItem m={5} p={5} colSpan={3}>
                            <Text as="b">Welcome to the best app of the world ! 🚀</Text>
                            <LoginForm />
                        </GridItem>
                    </Grid>
                </Box>
            </Center>
        </div>
    )

}