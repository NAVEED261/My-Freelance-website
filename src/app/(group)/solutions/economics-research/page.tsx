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
  useColorModeValue
} from "@chakra-ui/react";
import Header from '../../component/navbar';

export default function EconomicsResearch() {
  // Setting up color mode values for different themes
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const headingColor = useColorModeValue("teal.700", "teal.300");
  const borderColor = useColorModeValue("teal.600", "teal.400");

  return (
    <Box
      bg={bgColor}
      color={textColor}
      p={{ base: 6, md: 10 }}
      borderRadius="lg"
      boxShadow="2xl"
      transition="all 0.3s"
      _hover={{ boxShadow: "3xl", transform: "scale(1.03)" }}
      maxW="1000px"
      mx="auto"
      mt={12}
    >
      <Header />
      
      <Heading as="h1" size="2xl" color={headingColor} mb={6} textAlign="center">
        Economics Research Services
      </Heading>

      <Text fontSize="lg" mb={8} textAlign="center">
        Our team of skilled economists provides in-depth research and analysis to help businesses and individuals make informed economic decisions. From market analysis to feasibility studies, we deliver insights that drive success.
      </Text>

      <VStack align="start" spacing={10}>
        <Box>
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

        <Box>
          <Heading as="h2" size="lg" mb={4} color={headingColor}>
            Why Choose Our Economics Research Services?
          </Heading>
          <Text>
            We provide a unique combination of technical expertise, data-driven insights, and customized solutions. Here is s what sets us apart:
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

        <Box>
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
  );
}
