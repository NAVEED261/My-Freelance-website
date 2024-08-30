"use client";
import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, VStack, Divider, useColorModeValue } from "@chakra-ui/react";

export default function GPTExpertise() {
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
      <Heading as="h1" size="2xl" color={headingColor} mb={5} textAlign="center">
        GPT Expertise
      </Heading>
      <Text fontSize="lg" mb={10} textAlign="center">
        Leverage our expertise in Generative AI to enhance and automate your business processes. 
        We specialize in creating custom AI solutions that meet your specific needs and drive innovation.
      </Text>

      <VStack align="start" spacing={8}>
        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Our GPT Expertise
          </Heading>
          <UnorderedList spacing={3} pl={5}>
            <ListItem>Custom GPT-3/4 Model Development</ListItem>
            <ListItem>AI-Driven Content Generation</ListItem>
            <ListItem>Natural Language Processing (NLP) Solutions</ListItem>
            <ListItem>AI Chatbot Development</ListItem>
            <ListItem>Machine Learning Model Training</ListItem>
          </UnorderedList>
        </Box>

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Why Choose Our GPT Expertise?
          </Heading>
          <Text>
            Our deep understanding of Generative AI technologies enables us to deliver cutting-edge solutions tailored to your needs. 
            Here's why you should work with us:
          </Text>
          <UnorderedList spacing={3} pl={5} mt={3}>
            <ListItem>
              <Text as="span" fontWeight="bold">Custom Solutions:</Text> We build AI models that are tailored to your specific business requirements.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Innovative Approaches:</Text> We stay at the forefront of AI advancements to provide innovative solutions.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Proven Expertise:</Text> Our team has a track record of successful AI implementations across various industries.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">End-to-End Support:</Text> From development to deployment, we provide comprehensive support for your AI projects.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Scalable Models:</Text> We design AI models that can scale with your business as it grows.
            </ListItem>
          </UnorderedList>
        </Box>

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Our Process
          </Heading>
          <Text>
            Our GPT expertise process is designed to deliver high-quality AI solutions. Here’s how we do it:
          </Text>
          <UnorderedList spacing={3} pl={5} mt={3}>
            <ListItem>
              <Text as="span" fontWeight="bold">Consultation & Needs Assessment:</Text> We start by understanding your business needs and how AI can best serve them.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Model Design & Development:</Text> We design and develop custom GPT models tailored to your requirements.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Testing & Validation:</Text> We rigorously test our AI models to ensure accuracy and reliability.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Deployment:</Text> We deploy the AI solutions into your existing systems with minimal disruption.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Optimization & Scaling:</Text> We continuously monitor and optimize the models, ensuring they scale effectively with your business.
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </Box>
  );
}
