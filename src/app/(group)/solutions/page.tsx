"use client";
import React from 'react';
import { Box, Heading, Text, Grid, GridItem, useColorMode, useColorModeValue, ChakraProvider, extendTheme } from '@chakra-ui/react';

export default function SolutionsPage() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.100');
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const cardTextColor = useColorModeValue('gray.700', 'gray.100');
  const headingColor = useColorModeValue('blue.600', 'blue.300');

  return (
    <ChakraProvider theme={extendTheme()}>
      <Box bg={bgColor} color={textColor} p={10} fontFamily="Arial, sans-serif" minH="100vh">
        <Box textAlign="center" mb={20} pt={10}>
          <Heading as="h1" size="2xl" color={headingColor} mb={3}>
            Welcome to Our Solutions
          </Heading>
          <Text fontSize="lg">
            Your partner in innovative web solutions and automation services.
          </Text>
        </Box>

        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          <GridItem
            bg={cardBgColor}
            p={6}
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-5px)' }}
            transition="all 0.3s ease-in-out"
          >
            <Heading as="h2" size="lg" mb={4} color={headingColor}>
              Web Development
            </Heading>
            <Text fontSize="md" color={cardTextColor}>
              We provide custom website design and development solutions to enhance your online presence.
            </Text>
          </GridItem>

          <GridItem
            bg={cardBgColor}
            p={6}
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-5px)' }}
            transition="all 0.3s ease-in-out"
          >
            <Heading as="h2" size="lg" mb={4} color={headingColor}>
              UI/UX Design
            </Heading>
            <Text fontSize="md" color={cardTextColor}>
              Our UI/UX design services offer visually appealing and user-friendly interfaces for your applications.
            </Text>
          </GridItem>

          <GridItem
            bg={cardBgColor}
            p={6}
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-5px)' }}
            transition="all 0.3s ease-in-out"
          >
            <Heading as="h2" size="lg" mb={4} color={headingColor}>
              Automation Services
            </Heading>
            <Text fontSize="md" color={cardTextColor}>
              Streamline your business processes with our automation solutions using tools like Google Sheets and Zapier.
            </Text>
          </GridItem>

          <GridItem
            bg={cardBgColor}
            p={6}
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-5px)' }}
            transition="all 0.3s ease-in-out"
          >
            <Heading as="h2" size="lg" mb={4} color={headingColor}>
              Full-Stack Development
            </Heading>
            <Text fontSize="md" color={cardTextColor}>
              We provide complete full-stack development services to scale and optimize your applications.
            </Text>
          </GridItem>

          <GridItem
            bg={cardBgColor}
            p={6}
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-5px)' }}
            transition="all 0.3s ease-in-out"
          >
            <Heading as="h2" size="lg" mb={4} color={headingColor}>
              GPT Expertise
            </Heading>
            <Text fontSize="md" color={cardTextColor}>
              Leverage our expertise in Generative AI to enhance and automate your business processes.
            </Text>
          </GridItem>

          <GridItem
            bg={cardBgColor}
            p={6}
            borderRadius="md"
            boxShadow="lg"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-5px)' }}
            transition="all 0.3s ease-in-out"
          >
            <Heading as="h2" size="lg" mb={4} color={headingColor}>
              Stenography
            </Heading>
            <Text fontSize="md" color={cardTextColor}>
              Fast and accurate transcription solutions for your documentation and record-keeping needs.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
