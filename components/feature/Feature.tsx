"use client"
import { ReactIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Center, Container, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineStar } from "react-icons/ai"
import { RxRocket } from "react-icons/rx"
import { BsMoonStars } from "react-icons/bs"
import { BiPaint } from "react-icons/bi"
import { BiCodeAlt } from "react-icons/bi"
import { MdOutlineAccessible } from "react-icons/md"

export default function Feature() {
  return (
    <Box py="50" as={"section"} >
      {/* Top Headers  */}
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold"> Features</Text>
        <Heading fontWeight={"semibold"} > What you can expect? </Heading>
        <Text fontWeight={"bold"} fontSize="medium" > A bundle of 220+ ready-to-use, responsive and accessible components </Text>
        <Text fontWeight={"bold"} fontSize="medium"> with clever structured sourcecode files. </Text>
      </Box>
      <Container maxW="1500" mt={10} >

        {/* 6 components starts  */}
        <Box>
          <SimpleGrid columns={2} spacing="5">

            {/* 1st feature  */}
            <Box>
              <HStack>
                {/* <StarIcon width="5" height={"5"} ></StarIcon> */}
                <Box color="blue.500">
                <AiOutlineStar size={25} > </AiOutlineStar> 
                </Box>
                
                <Box>
                  <Heading fontSize={"medium"}>220+ Components</Heading>
                  <Text>All our components come with a light and dark color mode by default.</Text>
                </Box>
              </HStack>
            </Box>
            {/* 1st feature ends */}

            {/* 2nd feature  */}
            <Box>
              <HStack>
                <Box color="blue.500">
                <RxRocket size="25">  </RxRocket>
                </Box>
                <Box>
                  <Heading fontSize={"medium"}>Themable</Heading>
                  <Text>Your style. Your brand. Customize the components as you need them. It's that simple.</Text>
                </Box>
              </HStack>
            </Box>
            {/* 2nd feature ends */}

            {/* 3rd feature  */}
            <Box>
              <HStack>
                <Box color ="blue.500">
                <BsMoonStars size={"25"} ></BsMoonStars>
                </Box>
                
                <Box>
                  <Heading fontSize={"medium"}>Light & Dark</Heading>
                  <Text>All our components come with a light and dark color mode by default.</Text>
                </Box>
              </HStack>
            </Box>
            {/* 3rd  feature ends */}

            {/* 4th feature  */}
            <Box>
              <HStack>
                <Box color ="blue.500" >
                <BiPaint size={25} ></BiPaint>
                </Box>
                
                <Box>
                  <Heading fontSize={"medium"}>Valueable</Heading>
                  <Text>Your style. Your brand. Customize the components as you need them. It's that simple.</Text>
                </Box>
              </HStack>
            </Box>

            {/* 5th feature  */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <BiCodeAlt size={25}></BiCodeAlt>
                </Box>

                <Box>
                  <Heading fontSize={"medium"}>Developer Friendly</Heading>
                  <Text>Components are semantically divided into several files for better developer experience.</Text>
                </Box>
              </HStack>
            </Box>
            {/* 5th feature ends */}

            {/* 6th feature  */}
            <Box>
              <HStack>
                <Box color="blue.500">
                  <MdOutlineAccessible size="50" ></MdOutlineAccessible>
                </Box>

                <Box>
                  <Heading fontSize={"medium"}>Accessible</Heading>
                  <Text>Accessibility first. That's why we pay attention to accessibility right from the start.</Text>
                </Box>

              </HStack>
            </Box>
            {/* 6th feature ends */}

          </SimpleGrid>
        </Box>
      </Container>

      {/* 6 components ends */}
    </Box>

  )
}
