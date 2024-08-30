"use client";
import React from 'react';
import Header from '../../component/navbar';
import { Box, Heading, Text, UnorderedList, ListItem, VStack, Divider, useColorModeValue } from "@chakra-ui/react";

export default function WebDevelopment() {
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
      <Header />
      <VStack align="start" spacing={8} mt={8}>
        <Heading as="h1" size="2xl" color={headingColor} mb={5} textAlign="center">
          Web Development
        </Heading>
        <Text fontSize="lg" mb={10} textAlign="center">
          We offer comprehensive web development services, including custom website design, responsive web design, and more, to enhance your online presence and help you achieve your business goals.
        </Text>

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Our Web Development Expertise
          </Heading>
          <UnorderedList spacing={3} pl={5}>
            <ListItem>Custom Website Design and Development</ListItem>
            <ListItem>Responsive Web Design</ListItem>
            <ListItem>E-commerce Development</ListItem>
            <ListItem>Content Management Systems (CMS)</ListItem>
            <ListItem>Web Application Development</ListItem>
          </UnorderedList>
        </Box>

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Why Choose Our Web Development Services?
          </Heading>
          <Text>
            Our web development services are designed to provide you with a website that is not only visually appealing but also functional and scalable. Heres why we stand out:
          </Text>
          <UnorderedList spacing={3} pl={5} mt={3}>
            <ListItem>
              <Text as="span" fontWeight="bold">User-Centered Design:</Text> We focus on creating websites that offer a seamless user experience.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Cutting-Edge Technology:</Text> We use the latest tools and frameworks like React, Next.js, and Node.js to build fast, secure, and scalable websites.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">End-to-End Development:</Text> From front-end design to back-end development, we handle every aspect of your website.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">SEO Optimization:</Text> Our websites are optimized for search engines to improve your online visibility.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Ongoing Support:</Text> We provide continuous support and maintenance to keep your website updated and running smoothly.
            </ListItem>
          </UnorderedList>
        </Box>

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Our Process
          </Heading>
          <Text>
            Our web development process is designed to deliver the best results, ensuring your website meets your business needs and exceeds your expectations:
          </Text>
          <UnorderedList spacing={3} pl={5} mt={3}>
            <ListItem>
              <Text as="span" fontWeight="bold">Consultation & Planning:</Text> We start by understanding your business goals and planning the best approach.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Design & Development:</Text> Our team designs and develops both the front-end and back-end components of your website.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Testing & QA:</Text> We rigorously test your website to ensure it is bug-free and high-performing.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Deployment:</Text> We deploy your website to ensure it is secure, scalable, and accessible.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Maintenance & Support:</Text> Post-deployment, we offer maintenance and support to keep your website running smoothly.
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </Box>
  );
}
