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

export default function FullStackDevelopment() {
  // Enhance color styling for a professional look
  const bgColor = useColorModeValue("linear-gradient(135deg, #f0f5f9, #c2d2e9)", "linear-gradient(135deg, #2b2b2b, #121212)"); // Background gradient for the page
  const cardBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "#1a202c"); // Background for the card components
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
          _hover={{ boxShadow: "3xl", transform: "scale(1.03)" }}
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
              boxShadow="xl"
              _hover={{ boxShadow: "2xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
            >
              <Heading as="h1" size="2xl">
                Full-Stack Development Services
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
                We provide complete full-stack development services to scale and optimize your applications.
                Our expertise spans across front-end, back-end, and cloud technologies to deliver robust and scalable solutions.
              </Text>
            </Box>

            {/* Our Full-Stack Expertise Section */}
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
                Our Full-Stack Expertise
              </Heading>
              <UnorderedList spacing={4} pl={5}>
                <ListItem>Front-End Development (React, Angular, Vue.js)</ListItem>
                <ListItem>Back-End Development (Node.js, Python, PHP)</ListItem>
                <ListItem>Database Design and Management</ListItem>
                <ListItem>API Development and Integration</ListItem>
                <ListItem>Cloud Deployment and Management</ListItem>
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
                Why Choose Our Full-Stack Services?
              </Heading>
              <Text>
                We offer comprehensive full-stack development services that cover everything from initial design to final deployment.
                Here’s why we are the best choice for your full-stack development needs:
              </Text>
              <UnorderedList spacing={4} pl={5} mt={4}>
                <ListItem>
                  <Text as="span" fontWeight="bold">End-to-End Solutions:</Text> From front-end interfaces to back-end databases, we handle it all.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Scalable Architectures:</Text> We design scalable architectures that grow with your business.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Seamless Integration:</Text> Our solutions integrate seamlessly with your existing systems and workflows.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Expert Developers:</Text> Our team of expert developers is skilled in the latest technologies and best practices.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Ongoing Support:</Text> We provide ongoing support and maintenance to ensure your applications remain up-to-date and efficient.
                </ListItem>
              </UnorderedList>
            </Box>

            <Divider borderColor={borderColor} />

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
              <Heading as="h2" size="lg" mb={4} color={headingColor}>
                Our Process
              </Heading>
              <Text>
                Our full-stack development process is thorough and designed to deliver the best results. Here’s how we do it:
              </Text>
              <UnorderedList spacing={4} pl={5} mt={4}>
                <ListItem>
                  <Text as="span" fontWeight="bold">Consultation & Planning:</Text> We start by understanding your requirements and planning the best approach.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Design & Development:</Text> Our team designs and develops both the front-end and back-end components of your application.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Testing & QA:</Text> We rigorously test every aspect of your application to ensure it is bug-free and high-performing.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Deployment:</Text> We deploy your application to the cloud, ensuring it is secure, scalable, and accessible.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Maintenance & Support:</Text> Post-deployment, we offer maintenance and support to keep your application running smoothly.
                </ListItem>
              </UnorderedList>
            </Box>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
