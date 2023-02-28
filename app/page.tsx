"use client"
import CTA from '@/components/cta/CTA'
import Feature from '@/components/Header/feature/Feature'
import Header1 from '@/components/Header/Header1'
import Myhighlight from '@/components/myhighlight/Myhighlight'
import TopContainer from '@/components/topcontainer/TopContainer'
import { Box } from '@chakra-ui/react'
import React from 'react'


export default function page() {
  return (
    <>
      <Header1 />
      <Box as={"main"}>
        <TopContainer />
        <Feature/>
        <CTA></CTA>
        <Myhighlight/>
      </Box>




    </>
  )
}

