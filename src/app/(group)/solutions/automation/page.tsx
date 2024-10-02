"use client";
import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, VStack, Divider, useColorModeValue } from "@chakra-ui/react";
import Header from '../../component/navbar';

export default function Automation() {
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
        Automation Services
      </Heading>
      <Text fontSize="lg" mb={10} textAlign="center">
        Streamline your business processes with our automation solutions using tools like Google Sheets, Zapier, and custom scripts.
        We help you save time and reduce errors by automating repetitive tasks.
      </Text>

      <VStack align="start" spacing={8}>
        <Box>
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

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Why Automate with Us?
          </Heading>
          <Text>
            Our automation services are designed to help you achieve greater efficiency and accuracy in your business operations.
            Heres why you should choose us for your automation needs:
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

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Our Process
          </Heading>
          <Text>
            Our automation process is designed to deliver seamless and effective solutions. Heres how we work:
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
  );
}
