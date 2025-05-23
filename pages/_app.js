import { ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { CookiesProvider } from "react-cookie"
import '../styles/globals.css'
import Head from 'next/head'
import dotenv from "dotenv";
dotenv.config();

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CookiesProvider>
        <Head><title>Chop1Hour - Demo</title></Head>
        <Component {...pageProps} />
      </CookiesProvider>
      <Flex p={5} justifyContent="center" alignItems="center" bg="gray.100">
          <Text fontSize="md">
          <b>VM:</b> {process.env.NEXT_PUBLIC_VM || 'Not defined'} | <b>Database:</b> {process.env.NEXT_PUBLIC_MYSQL_DATABASE || 'Not defined'}          </Text>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
