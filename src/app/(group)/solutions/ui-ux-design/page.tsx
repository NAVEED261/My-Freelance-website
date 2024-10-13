"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  useColorModeValue,
  Grid,
  GridItem,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Header from "../../component/navbar"; // Update path if needed

export default function UiUxDesignPage() {
  const bgColor = useColorModeValue("#f0f4f8", "#20232a"); // Stylish background color
  const textColor = useColorModeValue("gray.700", "gray.100");
  const headingColor = useColorModeValue("#2c5282", "#63b3ed");
  const cardBgColor = useColorModeValue("white", "#2d3748");
  const cardTextColor = useColorModeValue("gray.700", "gray.100");

  return (
    <ChakraProvider theme={extendTheme()}>
      <Header />
      <Box
        bg={bgColor}
        color={textColor}
        p={10}
        fontFamily="Arial, sans-serif"
        minH="100vh"
        pt={20}
        style={{
          background: "linear-gradient(135deg, #f0f4f8, #e1e9f1)", // Gradient background for professional appearance
        }}
      >
        <VStack align="start" spacing={8} mt={8}>
          {/* Page Header */}
          <Box
            bg="blue.800"
            color="white"
            p={8}
            borderRadius="md"
            textAlign="center"
            w="full"
            boxShadow="lg"
          >
            <Heading as="h1" size="2xl">
              UI/UX Design Services
            </Heading>
          </Box>

          {/* Introduction Section */}
          <Box
            bg={cardBgColor}
            p={8}
            borderRadius="md"
            boxShadow="lg"
            w="full"
            _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
            transition="all 0.3s ease"
          >
            <Heading as="h2" size="lg" color={headingColor} mb={4}>
              Crafting Experiences that Delight Users
            </Heading>
            <Text fontSize="lg" lineHeight="tall">
              At Fatima Zehra StenoWeb Dynamics, we specialize in crafting
              visually appealing and user-centric interfaces that provide an
              exceptional user experience. Our goal is to create interfaces that
              are not only visually pleasing but also intuitive, leading to a
              seamless interaction between your business and customers.
            </Text>
          </Box>

          {/* Key Features Section */}
          <Box
            bg={cardBgColor}
            p={8}
            borderRadius="md"
            boxShadow="lg"
            w="full"
            _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
            transition="all 0.3s ease"
          >
            <Heading as="h2" size="lg" color={headingColor} mb={4}>
              Key Features of Our UI/UX Design
            </Heading>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
              {keyFeatures.map((feature) => (
                <GridItem key={feature.title}>
                  <Box
                    p={4}
                    bg={bgColor}
                    borderRadius="lg"
                    boxShadow="md"
                    _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
                    transition="all 0.3s ease-in-out"
                  >
                    <Heading size="md" mb={3} color={headingColor}>
                      {feature.title}
                    </Heading>
                    <Text color={cardTextColor}>{feature.description}</Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>

          {/* Why Choose Us Section */}
          <Box
            bg={cardBgColor}
            p={8}
            borderRadius="md"
            boxShadow="lg"
            w="full"
            _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
            transition="all 0.3s ease"
          >
            <Heading as="h2" size="lg" color={headingColor} mb={4}>
              Why Choose Our UI/UX Services?
            </Heading>
            <Text fontSize="lg" lineHeight="tall">
              We focus on understanding your users to create a meaningful
              experience that not only meets but exceeds their expectations. Our
              design process is driven by insights, allowing us to deliver
              solutions that make your digital product easy to use, beautiful,
              and impactful.
            </Text>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

const keyFeatures = [
  {
    title: "User Research",
    description:
      "We conduct extensive research to understand the target audience, allowing us to create designs that resonate with users.",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "We provide low and high-fidelity wireframes and prototypes, ensuring the design meets your expectations before development.",
  },
  {
    title: "User Interface Design",
    description:
      "We create aesthetically pleasing, modern designs that captivate users while maintaining brand consistency.",
  },
  {
    title: "Usability Testing",
    description:
      "We ensure the design is easy to use and achieves your business objectives through comprehensive usability testing.",
  },
];
