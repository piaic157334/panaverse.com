'use client'
import { Box, Button, Flex, Heading, HStack, Image, Link ,Text} from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export default function TopContainer() {
    return (

        <Box backgroundImage={"/images/background.webp"} mt={"5"}
            backgroundSize="contain" py={"20"} as={"section"} >
            <HStack>
                {/* left side box  */}
                <Box w="50%" color={"white"} pl="40" >
                    <Heading fontSize={"4xl"} fontWeight="extrabold"> Build your next idea even faster </Heading>
                    <Text lineHeight={"7"}>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse,
                        Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                    <Box mt={"5"} >
                        <Button colorScheme={"blue"} > Buy now </Button>
                        <Button colorScheme={"blue"} marginLeft="5" variant={"outline"}> View Components  </Button>
                    </Box>
                    <Flex alignItems={"center"} >
                    <AvatarGroup size='md' max={4} mt="6">
                        <Avatar name='Sir Zia' src='/images/zia.jpg ' />
                        <Avatar name='Sir Owais' src='/images/Owais.jpg ' />
                        <Avatar name='Sir Adil' src='/images/Adil.jfif ' />
                        <Avatar name='Sir Naveed ' src='/images/naveed.jpg ' />
                    </AvatarGroup>
                     <Text ml={"5"} mt={"5"} > 
                     Copy Right By : <Link target={"_blank"} color={"blue.200"} 
                     href={"https://github.com/piaic157334/"}  > Naveed Ahsan  </Link>  </Text> 
                   </Flex>

                </Box>
                {/* right side box  */}
                <Box w="50%">
                    <Image src='/images/banner.png'></Image>
                </Box>

            </HStack>
        </Box>
    )
}
