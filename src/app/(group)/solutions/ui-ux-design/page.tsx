"use client";
import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, VStack, Divider, useColorModeValue } from "@chakra-ui/react";

export default function UIUXDesign() {
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
        UI/UX Design Services
      </Heading>
      <Text fontSize="lg" mb={10} textAlign="center">
        Our team of experts crafts visually appealing and user-friendly interfaces that deliver a seamless user experience.
        We blend creativity with technical expertise to create designs that not only look great but also function flawlessly.
      </Text>

      <VStack align="start" spacing={8}>
        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            What We Offer
          </Heading>
          <UnorderedList spacing={3} pl={5}>
            <ListItem>User Research and Analysis</ListItem>
            <ListItem>Wireframing and Prototyping</ListItem>
            <ListItem>Visual Design</ListItem>
            <ListItem>User Testing and Feedback</ListItem>
            <ListItem>Interaction Design</ListItem>
          </UnorderedList>
        </Box>

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Why Choose Us?
          </Heading>
          <Text>
            Our approach to UI/UX design is centered around the user. We believe that great design is about more than just aesthetics—
            it's about creating a meaningful and intuitive experience for your users. Here’s why we stand out:
          </Text>
          <UnorderedList spacing={3} pl={5} mt={3}>
            <ListItem>
              <Text as="span" fontWeight="bold">User-Centric Design:</Text> We prioritize the needs and behaviors of your users in every design decision.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Expertise in Latest Tools:</Text> Our team is proficient in the latest design tools and technologies, ensuring that your project is cutting-edge.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Collaborative Approach:</Text> We work closely with your team to ensure that our designs align with your brand vision and goals.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Iterative Design Process:</Text> We believe in constant improvement and iterate on designs based on user feedback and testing.
            </ListItem>
          </UnorderedList>
        </Box>

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Our Process
          </Heading>
          <Text>
            Our UI/UX design process is thorough and designed to deliver the best results. Here’s how we do it:
          </Text>
          <UnorderedList spacing={3} pl={5} mt={3}>
            <ListItem>
              <Text as="span" fontWeight="bold">Discovery & Research:</Text> We start by understanding your business goals, target audience, and user needs.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Wireframing & Prototyping:</Text> We create wireframes and prototypes to visualize the structure and flow of your application.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Design & Development:</Text> Our designers craft beautiful interfaces while our developers ensure they are responsive and functional.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Testing & Validation:</Text> We conduct user testing to gather feedback and refine the design for the best user experience.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Launch & Support:</Text> After launch, we provide ongoing support to ensure your application continues to deliver a great user experience.
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </Box>
  );
}
