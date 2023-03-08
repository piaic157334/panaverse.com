import { Box, Container, Flex, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaFacebook, FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box>
            <Container maxW={"1200"} bg={"gray.50"} my={"5"} p={"5"}>

                <Flex justifyContent={"space-around"} >

                    <Text> © 2023 Panaverse. All rights reserved. </Text>
                    <HStack>

                        <Box color="blackAlpha.700">
                            <Link href={"https://github.com/"} target={"_blank"} >
                            <FaGithub size={25} > </FaGithub>
                            </Link>
                        </Box>

                        <Box color="blackAlpha.700">
                            <Link href={"https://facebook.com/"} target={"_blank"} >
                            <FaFacebook size={25} > </FaFacebook>
                            </Link>
                        </Box>

                        <Box color="blackAlpha.700">
                          <Link href={"https://discord.com/"} target={"_blank"} >
                               <FaDiscord size={25} > </FaDiscord>
                          </Link>
                        </Box>
                    </HStack>

                </Flex>

            </Container>



        </Box>
    )
}
