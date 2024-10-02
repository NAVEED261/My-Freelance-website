"use client";
import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, VStack, Divider, useColorModeValue } from "@chakra-ui/react";
import Header from '../../component/navbar';

export default function FullStackDevelopment() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const headingColor = useColorModeValue("blue.700", "blue.300");

  return (
    <Box
      bg={bgColor}
      color={textColor}
      p={10}
      borderRadius="md"
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
      maxW="900px"
      mx="auto"
      mt={10}
    >
      <Header/>
      <Heading as="h1" size="2xl" color={headingColor} mb={5} textAlign="center">
        Full-Stack Development Services
      </Heading>
      <Text fontSize="lg" mb={10} textAlign="center">
        We provide complete full-stack development services to scale and optimize your applications. 
        Our expertise spans across front-end, back-end, and cloud technologies to deliver robust and scalable solutions.
      </Text>

      <VStack align="start" spacing={8}>
        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Our Full-Stack Expertise
          </Heading>
          <UnorderedList spacing={3} pl={5}>
            <ListItem>Front-End Development (React, Angular, Vue.js)</ListItem>
            <ListItem>Back-End Development (Node.js, Python, PHP)</ListItem>
            <ListItem>Database Design and Management</ListItem>
            <ListItem>API Development and Integration</ListItem>
            <ListItem>Cloud Deployment and Management</ListItem>
          </UnorderedList>
        </Box>

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Why Choose Our Full-Stack Services?
          </Heading>
          <Text>
            We offer comprehensive full-stack development services that cover everything from initial design to final deployment.
            Here’s why we are the best choice for your full-stack development needs:
          </Text>
          <UnorderedList spacing={3} pl={5} mt={3}>
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

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Our Process
          </Heading>
          <Text>
            Our full-stack development process is thorough and designed to deliver the best results. Here’s how we do it:
          </Text>
          <UnorderedList spacing={3} pl={5} mt={3}>
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
  );
}
