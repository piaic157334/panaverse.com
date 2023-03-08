import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import React from 'react'

export default function Faq() {
    return (
        <Box mt={5}>
            <Container maxW={1200} p="5" bg="gray.50">
                <Flex justifyContent={"space-around"}>

                    {/* Left section start */}
                    <Box textAlign={"center"} flex="2">
                        <Text color={"blue.500"} fontWeight="bold"> Support</Text>
                        <Heading fontWeight={"semibold"} > FAQs </Heading>
                        <Text fontWeight={"bold"} fontSize="medium" >Everything you need to know about the product
                            and billing. For questions about licensing, please see our licensing page</Text>

                    </Box>
                    {/* Left section ends */}

                    {/* Right section start */}
                    <Box flex="3">
                        <Accordion allowToggle>

                            {/* Section 1 start  */}

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Section 1 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            {/* Section 1 end  */}

                            {/* Section 2 start  */}

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Section 2 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            {/* Section 2 end  */}


                            {/* Section 3 start  */}
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Section 3 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    This is our section 3 of Pnaverse Dao 
                                                                                                                                 </AccordionPanel>
                                </AccordionItem>

                            {/* Section 3 end  */}

                        </Accordion>

                    </Box>
                    {/* Right section Ends */}

                </Flex>
                <Button display={"block"} ml={"40%"} mt={"2"} > Show More </Button>
                
            </Container>

        </Box>
    )
}
