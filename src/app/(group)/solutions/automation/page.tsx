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

export default function Automation() {
  const bgColor = useColorModeValue("linear-gradient(135deg, #f3f0e7, #d4c3a3)", "#2d2d2d"); // Stylish antique gradient
  const cardBgColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "#1a202c"); // Semi-transparent for better contrast with background
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("#1e3a8a", "#63b3ed");

  return (
    <ChakraProvider theme={extendTheme()}>
      <Box bg={bgColor} minH="100vh" pb={20}>
        <Header />
        <Box
          color={textColor}
          p={{ base: 5, md: 10 }}
          borderRadius="md"
          boxShadow="lg"
          maxW="1200px"
          mx="auto"
          mt={10}
          bg={cardBgColor}
          backdropFilter="blur(5px)"
          transition="all 0.3s"
          _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
        >
          <VStack align="start" spacing={8} mt={8}>
            {/* Page Header */}
            <Box
              bg="blue.900"
              color="white"
              p={8}
              borderRadius="md"
              textAlign="center"
              w="full"
              boxShadow="lg"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
            >
              <Heading as="h1" size="2xl">
                Automation Services
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
              <Text fontSize={{ base: "md", md: "lg" }} mb={10} textAlign="center">
                Streamline your business processes with our automation solutions using tools like Google Sheets, Zapier, and custom scripts.
                We help you save time and reduce errors by automating repetitive tasks.
              </Text>
            </Box>

            {/* Automation Solutions Section */}
            <Box
              p={8}
              borderRadius="md"
              boxShadow="lg"
              w="full"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
              bg={cardBgColor}
            >
              <Heading as="h2" size="lg" mb={3} color={headingColor}>
                Our Automation Solutions
              </Heading>
              <UnorderedList spacing={3} pl={5}>
                <ListItem>Workflow Automation</ListItem>
                <ListItem>Data Integration</ListItem>
                <ListItem>Automated Reporting</ListItem>
                <ListItem>Custom Script Development</ListItem>
                <ListItem>Third-Party API Integration</ListItem>
              </UnorderedList>
            </Box>

            <Divider borderColor={headingColor} />

            {/* Why Automate with Us Section */}
            <Box
              p={8}
              borderRadius="md"
              boxShadow="lg"
              w="full"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
              bg={cardBgColor}
            >
              <Heading as="h2" size="lg" mb={3} color={headingColor}>
                Why Automate with Us?
              </Heading>
              <Text>
                Our automation services are designed to help you achieve greater efficiency and accuracy in your business operations.
                Here’s why you should choose us for your automation needs:
              </Text>
              <UnorderedList spacing={3} pl={5} mt={3}>
                <ListItem>
                  <Text as="span" fontWeight="bold">Efficiency:</Text> We streamline your workflows, allowing you to focus on what matters most.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Customization:</Text> We tailor our automation solutions to meet the unique needs of your business.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Reliability:</Text> Our automated systems are built to run smoothly with minimal intervention.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Expert Support:</Text> We provide ongoing support to ensure your automation solutions continue to deliver value.
                </ListItem>
              </UnorderedList>
            </Box>

            <Divider borderColor={headingColor} />

            {/* Our Process Section */}
            <Box
              p={8}
              borderRadius="md"
              boxShadow="lg"
              w="full"
              _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
              bg={cardBgColor}
            >
              <Heading as="h2" size="lg" mb={3} color={headingColor}>
                Our Process
              </Heading>
              <Text>
                Our automation process is designed to deliver seamless and effective solutions. Here’s how we work:
              </Text>
              <UnorderedList spacing={3} pl={5} mt={3}>
                <ListItem>
                  <Text as="span" fontWeight="bold">Assessment:</Text> We begin by understanding your business processes and identifying areas for improvement.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Planning:</Text> We develop a detailed plan outlining the automation strategy and tools to be used.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Implementation:</Text> Our team builds and integrates the automation solutions into your existing systems.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Testing:</Text> We rigorously test the automation solutions to ensure they function correctly and efficiently.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Optimization:</Text> We continuously monitor and optimize the automation processes for ongoing efficiency.
                </ListItem>
              </UnorderedList>
            </Box>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
