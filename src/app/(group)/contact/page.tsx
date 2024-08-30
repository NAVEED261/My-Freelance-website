"use client";
import React from 'react';
import Header from '../component/navbar';
import { Box, Heading, Text, VStack, Divider, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";

export default function Contact() {
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
      maxW="1200px"
      mx="auto"
      mt={10}
    >
      <Header />
      <VStack align="start" spacing={8} mt={8}>
        <Heading as="h1" size="2xl" color={headingColor} mb={5} textAlign="center">
          Contact Us
        </Heading>
        <Text fontSize="lg" mb={10} textAlign="center">
          Express your opinion and any queries you may have. We are here to assist you.
        </Text>

        <Box w="full" mb={10}>
          <iframe
            width="100%"
            height="400px"
            title="Your Business Location"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=%C4%B0zmir+(Your%20Business%Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(0.5) contrast(1.2) opacity(0.7)", borderRadius: "8px" }}
          />
        </Box>

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Get in Touch
          </Heading>
          <VStack align="start" spacing={5}>
            <Text>
              <strong>Address:</strong> House No. R-98, ##### 5c-2, North Karachi
            </Text>
            <Text>
              <strong>Email:</strong> hnaveed264@gmail.com
            </Text>
            <Text>
              <strong>Phone:</strong> 0300-2385209, 0332-3426523
            </Text>
            <Text mt={5}>
              <strong>Apply for Job:</strong>{" "}
              <a href="https://forms.gle/kSgthT2gdsQNq4s7A" target="_blank" rel="noopener noreferrer" style={{ color: headingColor, textDecoration: 'underline' }}>
                Fill out our job application form here
              </a>
            </Text>
          </VStack>
        </Box>

        <Divider borderColor={headingColor} />

        <Box w="full">
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Queries
          </Heading>
          <form action="https://formspree.io/f/mqkrnvoe" method="POST">
            <VStack align="start" spacing={5}>
              <Box w="full">
                <Text mb={1} fontWeight="bold">
                  Name
                </Text>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  bg="gray.700"
                  borderColor="blue.500"
                  focusBorderColor="blue.300"
                  textColor="white"
                  placeholder="Your Name"
                  required
                />
              </Box>
              <Box w="full">
                <Text mb={1} fontWeight="bold">
                  Email
                </Text>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  bg="gray.700"
                  borderColor="blue.500"
                  focusBorderColor="blue.300"
                  textColor="white"
                  placeholder="Your Email"
                  required
                />
              </Box>
              <Box w="full">
                <Text mb={1} fontWeight="bold">
                  Subject
                </Text>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  bg="gray.700"
                  borderColor="blue.500"
                  focusBorderColor="blue.300"
                  textColor="white"
                  placeholder="Subject"
                  required
                />
              </Box>
              <Box w="full">
                <Text mb={1} fontWeight="bold">
                  Message
                </Text>
                <Textarea
                  id="message"
                  name="message"
                  bg="gray.700"
                  borderColor="blue.500"
                  focusBorderColor="blue.300"
                  textColor="white"
                  placeholder="Your Message"
                  h="150px"
                  resize="none"
                  required
                />
              </Box>
              <Button
                type="submit"
                bg="blue.600"
                color="white"
                _hover={{ bg: "blue.700" }}
                size="lg"
                w="full"
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
}
