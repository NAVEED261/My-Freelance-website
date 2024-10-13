"use client";
import React from 'react';
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  Divider,
  useColorModeValue,
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";
import Header from '../../component/navbar';

export default function MalirDevelopmentAuthority() {
  // Setting up color mode values for different themes
  const bgColor = useColorModeValue("linear-gradient(135deg, #f7fafc, #e2e8f0)", "linear-gradient(135deg, #2d3748, #1a202c)");
  const cardBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.85)");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const headingColor = useColorModeValue("teal.700", "teal.300");
  const borderColor = useColorModeValue("teal.600", "teal.400");

  return (
    <ChakraProvider theme={extendTheme()}>
      <Box bg={bgColor} minH="100vh" pb={20}>
        <Header />
        <Box
          color={textColor}
          p={{ base: 6, md: 10 }}
          borderRadius="lg"
          boxShadow="lg"
          maxW="1000px"
          mx="auto"
          mt={12}
          bg={cardBgColor}
          backdropFilter="blur(6px)"
          transition="all 0.3s"
          _hover={{ boxShadow: "2xl", transform: "scale(1.03)" }}
        >
          <VStack align="start" spacing={8}>
            {/* Page Header */}
            <Box
              bg="teal.900"
              color="white"
              p={8}
              borderRadius="md"
              textAlign="center"
              w="full"
              boxShadow="2xl"
              _hover={{ boxShadow: "3xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
            >
              <Heading as="h1" size="2xl">
                Malir Development Authority Services
              </Heading>
            </Box>

            {/* Introduction Section */}
            <Box
              p={8}
              borderRadius="md"
              boxShadow="lg"
              w="full"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
              bg={cardBgColor}
            >
              <Text fontSize={{ base: "md", md: "lg" }} mb={8} textAlign="center">
                We provide comprehensive documentation services for all public housing schemes under the Malir Development Authority (MDA), Sindh Government. Our expert team is here to assist you with various procedures related to property documentation and ensure a smooth and hassle-free experience.
              </Text>
            </Box>

            {/* Our Expertise Section */}
            <Box
              p={8}
              borderRadius="md"
              boxShadow="lg"
              w="full"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
              bg={cardBgColor}
            >
              <Heading as="h2" size="lg" mb={4} color={headingColor}>
                Our MDA Documentation Expertise
              </Heading>
              <UnorderedList spacing={4} pl={5}>
                <ListItem>Property Allotment</ListItem>
                <ListItem>Transfer of Property</ListItem>
                <ListItem>Mutation Services</ListItem>
                <ListItem>Certificate of Transfer (CTC)</ListItem>
                <ListItem>Sell and Purchase Documentation</ListItem>
              </UnorderedList>
            </Box>

            <Divider borderColor={borderColor} />

            {/* Schemes Covered Section */}
            <Box
              p={8}
              borderRadius="md"
              boxShadow="lg"
              w="full"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
              bg={cardBgColor}
            >
              <Heading as="h2" size="lg" mb={4} color={headingColor}>
                Schemes We Cover
              </Heading>
              <UnorderedList spacing={4} pl={5}>
                <ListItem>Taisor Town Scheme-45</ListItem>
                <ListItem>New Malir Scheme-1</ListItem>
                <ListItem>Shah Latif Town Scheme-25</ListItem>
                <ListItem>New Balloting Plots of T.T 2019</ListItem>
                <ListItem>Cottages Industry Plots</ListItem>
                <ListItem>Commercial Plots in All Schemes</ListItem>
              </UnorderedList>
            </Box>

            <Divider borderColor={borderColor} />

            {/* Why Choose Us Section */}
            <Box
              p={8}
              borderRadius="md"
              boxShadow="lg"
              w="full"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
              bg={cardBgColor}
            >
              <Heading as="h2" size="lg" mb={4} color={headingColor}>
                Why Choose Our MDA Services?
              </Heading>
              <Text>
                We provide a unique combination of expert guidance, complete transparency, and a hassle-free experience:
              </Text>
              <UnorderedList spacing={4} pl={5} mt={4}>
                <ListItem>
                  <Text as="span" fontWeight="bold">Expert Guidance:</Text> With in-depth knowledge of MDA procedures, we provide clear guidance at every step.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Complete Transparency:</Text> We ensure all documentation and processes are transparent and efficient.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Hassle-Free Experience:</Text> Our experienced team takes care of the entire documentation process, making it easy for you.
                </ListItem>
              </UnorderedList>
            </Box>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
