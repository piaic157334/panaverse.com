'use client'
import { Box, Button, Flex, Heading, HStack, Link, List, ListItem } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon, MoonIcon } from '@chakra-ui/icons'
import React from 'react'

export default function Header1() {
  return (

    <Box pt={5}>
      <Flex justifyContent={"space-around"} alignItems={"center"} >
        {/* left area  */}
        <Box>
          <HStack>

            <img src="/images/logo.webp" alt="logo" />
            <List>
              <HStack spacing={"20"} ml="10px" fontWeight={"bold"}>
                <ListItem> Home</ListItem>
                <ListItem> About</ListItem>
                <ListItem> Contact</ListItem>
              </HStack>
            </List>
          </HStack>
        </Box>

        {/* Right Area */}
        <Box>
          <Box as="span"> <SearchIcon w="5" h="5" ></SearchIcon> </Box>
          <Box as="span" px={"5"} > <MoonIcon w="5" h="5"  ></MoonIcon>  </Box>
          <Link href="https://www.piaic.org/" target={"_blank"} >
            <Box as="span" > <Button variant={"outline"} > Go to PIAIC </Button> </Box>
          </Link>
        </Box>
      </Flex>
    </Box>
  )

}
