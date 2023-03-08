"use client"
import CTA from '@/components/cta/CTA'
import Faq from '@/components/faq/Faq'
import Footer from '@/components/footer/Footer'
import Feature from '@/components/feature/Feature'
import Header1 from '@/components/Header/Header1'
import Myhighlight from '@/components/myhighlight/Myhighlight'
import Newsletter from '@/components/newsletter/Newsletter'
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
        <Newsletter/>
        <Faq/>
        <Footer/>
        
      </Box>




    </>
  )
}

