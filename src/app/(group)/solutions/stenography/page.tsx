"use client";
import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, VStack, Divider, useColorModeValue } from "@chakra-ui/react";

export default function Stenography() {
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
        Stenography Services
      </Heading>
      <Text fontSize="lg" mb={10} textAlign="center">
        Fast and accurate transcription solutions for your documentation and record-keeping needs. 
        Our expert stenographers ensure precision and confidentiality in all transcription tasks.
      </Text>

      <VStack align="start" spacing={8}>
        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Our Stenography Expertise
          </Heading>
          <UnorderedList spacing={3} pl={5}>
            <ListItem>Courtroom Transcriptions</ListItem>
            <ListItem>Business Meetings and Conferences</ListItem>
            <ListItem>Medical Transcriptions</ListItem>
            <ListItem>Legal Document Transcriptions</ListItem>
            <ListItem>Customized Transcription Services</ListItem>
          </UnorderedList>
        </Box>

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Why Choose Our Stenography Services?
          </Heading>
          <Text>
            Our stenography services are tailored to meet the diverse needs of our clients, ensuring accuracy and efficiency in every task.
            Heres why you should trust us with your transcription needs:
          </Text>
          <UnorderedList spacing={3} pl={5} mt={3}>
            <ListItem>
              <Text as="span" fontWeight="bold">Accuracy:</Text> We deliver highly accurate transcriptions, essential for legal and official documentation.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Confidentiality:</Text> Your sensitive information is handled with the utmost confidentiality and security.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Expert Transcribers:</Text> Our team comprises experienced professionals skilled in various stenography techniques.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Timely Delivery:</Text> We understand the importance of deadlines and ensure timely delivery of all transcriptions.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Customized Solutions:</Text> We offer tailored transcription services to meet the unique needs of your business or legal practice.
            </ListItem>
          </UnorderedList>
        </Box>

        <Divider borderColor={headingColor} />

        <Box>
          <Heading as="h2" size="lg" mb={3} color={headingColor}>
            Our Process
          </Heading>
          <Text>
            Our stenography process is designed to provide seamless and precise transcription services. Heres how we work:
          </Text>
          <UnorderedList spacing={3} pl={5} mt={3}>
            <ListItem>
              <Text as="span" fontWeight="bold">Consultation & Understanding:</Text> We begin by understanding your specific transcription needs.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Recording & Transcription:</Text> Our stenographers accurately record and transcribe your meetings, hearings, or dictations.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Review & Quality Check:</Text> Each transcription undergoes a thorough review to ensure accuracy and completeness.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">Delivery & Support:</Text> We deliver the final transcripts promptly and offer ongoing support for any revisions or additional requests.
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </Box>
  );
}
