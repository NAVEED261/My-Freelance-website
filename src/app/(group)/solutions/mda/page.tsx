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
  useColorModeValue
} from "@chakra-ui/react";
import Header from '../../component/navbar';

export default function MalirDevelopmentAuthority() {
  // Setting up color mode values for different themes
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const headingColor = useColorModeValue("teal.700", "teal.300");
  const borderColor = useColorModeValue("teal.600", "teal.400");

  return (
    <Box
      bg={bgColor}
      color={textColor}
      p={{ base: 6, md: 10 }}
      borderRadius="lg"
      boxShadow="2xl"
      transition="all 0.3s"
      _hover={{ boxShadow: "3xl", transform: "scale(1.03)" }}
      maxW="1000px"
      mx="auto"
      mt={12}
    >
      <Header />

      <Heading as="h1" size="2xl" color={headingColor} mb={6} textAlign="center">
        Malir Development Authority Services
      </Heading>

      <Text fontSize="lg" mb={8} textAlign="center">
        We provide comprehensive documentation services for all public housing schemes under the Malir Development Authority (MDA), Sindh Government. Our expert team is here to assist you with various procedures related to property documentation and ensure a smooth and hassle-free experience.
      </Text>

      <VStack align="start" spacing={10}>
        <Box>
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

        <Box>
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

        <Box>
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
  );
}
