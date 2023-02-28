"use client"
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { IoSpeedometer } from "react-icons/io5"
import { FaCommentDollar } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import { FcCustomerSupport } from "react-icons/fc"



export default function Myhighlight() {
    return (
        <Box py="50" as={"section"} >
            {/* Top Headers  */}
            <Box textAlign={"center"}>
                <Text color={"blue.500"} fontWeight="bold"> HighLights</Text>
                <Heading fontWeight={"semibold"} > Why Chakra UI Pro? </Heading>
                <Text fontWeight={"bold"} fontSize="medium" > Because these beautiful and responsive React components will
                    help you realize your next idea in no time </Text>
            </Box>
            <Container maxW={1200} mt={"5"} >
                <Flex gap={"5"}>
                    {/* 1st card  */}
                    <Card align='center'>
                        <CardHeader>
                            <Center color={"blue.500"} >
                                <IoSpeedometer size={"50"}></IoSpeedometer>
                            </Center>
                            <Heading size='md'> Speed up your workflow</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text align={"center"}>Quickly put together different components to create an nearly infinite
                                combination of user experiences.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue'>View here</Button>
                        </CardFooter>
                    </Card>

                    {/* 2nd card  */}
                    <Card align='center'>
                        <CardHeader>
                        <Center color={"blue.500"} >
                            <FaCommentDollar size={"50"}></FaCommentDollar>
                        </Center>
                            <Heading size='md'> Save good money</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text align={"center"}>Quickly put together different components to create an nearly infinite
                                combination of user experiences.</Text>

                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue'>View here</Button>
                        </CardFooter>
                    </Card>

                    {/* 3rd card  */}
                    <Card align='center'>
                        <CardHeader>
                        <Center color={"blue.500"} >
                            <IoMdSettings size={"50"}></IoMdSettings>
                        </Center>
                            <Heading size='md'> Easily customizable</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text align={"center"}>Quickly put together different components to create an nearly infinite
                                combination of user experiences.</Text>

                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue'>View here</Button>
                        </CardFooter>
                    </Card>

                    {/* 4th card  */}
                    <Card align='center'>
                        <CardHeader>
                        <Center color={"blue.500"} >
                            <FcCustomerSupport size={"50"}></FcCustomerSupport>
                        </Center>
                            <Heading size='md'> Support Chakra UI </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text align={"center"}>Quickly put together different components to create an nearly infinite
                                combination of user experiences.</Text>

                        </CardBody>
                        <CardFooter>
                            <Button colorScheme='blue'>View here</Button>
                        </CardFooter>
                    </Card>



                </Flex>
            </Container>
        </Box>
    )
}
