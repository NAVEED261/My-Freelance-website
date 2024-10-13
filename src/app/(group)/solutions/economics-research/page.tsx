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

export default function EconomicsResearch() {
  // Enhanced styles for a professional and antique look
  const bgColor = useColorModeValue("linear-gradient(135deg, #f3f0e7, #d4c3a3)", "linear-gradient(135deg, #2d2d2d, #1a1a1a)"); // Background gradient
  const cardBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "#1a202c"); // Slightly transparent for a classy look
  const textColor = useColorModeValue("gray.800", "gray.100");
  const headingColor = useColorModeValue("#1e3a8a", "#63b3ed");
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
                Economics Research Services
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
                Our team of skilled economists provides in-depth research and analysis to help businesses and individuals make informed economic decisions.
                From market analysis to feasibility studies, we deliver insights that drive success.
              </Text>
            </Box>

            {/* What We Offer Section */}
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
                What We Offer
              </Heading>
              <UnorderedList spacing={4} pl={5}>
                <ListItem>Market Analysis & Economic Trends</ListItem>
                <ListItem>Business & Financial Forecasting</ListItem>
                <ListItem>Custom Economic Reports</ListItem>
                <ListItem>Policy Impact Analysis</ListItem>
                <ListItem>Economic Feasibility Studies</ListItem>
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
                Why Choose Our Economics Research Services?
              </Heading>
              <Text>
                We provide a unique combination of technical expertise, data-driven insights, and customized solutions. Here’s what sets us apart:
              </Text>
              <UnorderedList spacing={4} pl={5} mt={4}>
                <ListItem>
                  <Text as="span" fontWeight="bold">Data-Driven Insights:</Text> We use the latest data sources and statistical models to provide precise analysis.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Customized Solutions:</Text> We tailor every report to meet your specific needs.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Experienced Researchers:</Text> Our team has years of experience in economics, offering expert insights to your business.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Comprehensive Approach:</Text> From data collection to final analysis, our approach is thorough and reliable.
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
                Our process is streamlined to deliver accurate, valuable, and actionable insights for your business:
              </Text>
              <UnorderedList spacing={4} pl={5} mt={4}>
                <ListItem>
                  <Text as="span" fontWeight="bold">Initial Consultation:</Text> We understand your requirements and define the scope of the project.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Data Collection & Analysis:</Text> We gather data from reliable sources and perform in-depth analysis.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Report Preparation:</Text> We prepare customized reports with insights and actionable recommendations.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">Follow-Up Support:</Text> After delivery, we offer support to ensure our findings are applied effectively.
                </ListItem>
              </UnorderedList>
            </Box>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
