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

export default function Stenography() {
  // Setting up color mode values for different themes
  const bgColor = useColorModeValue("linear-gradient(135deg, #f7fafc, #e2e8f0)", "linear-gradient(135deg, #2d3748, #1a202c)");
  const cardBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.85)");
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
          _hover={{ boxShadow: "2xl", transform: "scale(1.03)" }}
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
              boxShadow="2xl"
              _hover={{ boxShadow: "3xl", transform: "translateY(-5px)" }}
              transition="all 0.3s ease-in-out"
            >
              <Heading as="h1" size="2xl">
                Stenography Services
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
              <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">
                Fast and accurate transcription solutions for your documentation and record-keeping needs.
                Our expert stenographers ensure precision and confidentiality in all transcription tasks.
              </Text>
            </Box>

            {/* Our Expertise Section */}
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
                Our Stenography Expertise
              </Heading>
              <UnorderedList spacing={4} pl={5}>
                <ListItem>Courtroom Transcriptions</ListItem>
                <ListItem>Business Meetings and Conferences</ListItem>
                <ListItem>Medical Transcriptions</ListItem>
                <ListItem>Legal Document Transcriptions</ListItem>
                <ListItem>Customized Transcription Services</ListItem>
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
                Why Choose Our Stenography Services?
              </Heading>
              <Text>
                Our stenography services are tailored to meet the diverse needs of our clients, ensuring accuracy and efficiency in every task.
                Here is why you should trust us with your transcription needs:
              </Text>
              <UnorderedList spacing={4} pl={5} mt={4}>
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
                Our stenography process is designed to provide seamless and precise transcription services. Here is how we work:
              </Text>
              <UnorderedList spacing={4} pl={5} mt={4}>
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
      </Box>
    </ChakraProvider>
  );
}
