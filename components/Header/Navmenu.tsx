import { Flex, HStack, List, ListItem, Stack } from '@chakra-ui/react'
import React from 'react'

export default function Navmenu() {
  return (
    // <HStack fontWeight={"black"}>

    <List  >

      <Stack fontWeight={"bold"}
        direction={{ base: "column", md: "row" }}
      >


        <ListItem> Home</ListItem>
        <ListItem> About</ListItem>
        <ListItem> Contact</ListItem>
      </Stack>

    </List>



  )
}

