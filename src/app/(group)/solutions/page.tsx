"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  useColorMode,
  useColorModeValue,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Header from "../component/navbar"; // Importing Header Component for Navbar
import Link from "next/link";

export default function SolutionsPage() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.900"); // Updated background color
  const textColor = useColorModeValue("gray.800", "gray.100");
  const cardBgColor = useColorModeValue("white", "gray.700");
  const cardTextColor = useColorModeValue("gray.700", "gray.100");
  const headingColor = useColorModeValue("blue.600", "blue.300");

  return (
    <ChakraProvider theme={extendTheme()}>
      {/* Include the Header Component */}
      <Header />

      {/* Background Video */}
      <Box position="relative" minH="100vh" overflow="hidden">
        {/* Video as background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content on top of the video */}
        <Box
          bg={bgColor}
          color={textColor}
          p={10}
          fontFamily="Arial, sans-serif"
          minH="100vh"
          pt={20} // Space from top to make the Navbar visible clearly
          position="relative"
          zIndex={10} // Ensures content stays on top of video
        >
          <Box textAlign="center" mb={20}>
            <Heading as="h1" size="2xl" color={headingColor} mb={3}>
              Welcome to Our Solutions
            </Heading>
            <Text fontSize="lg">
              Your partner in innovative web solutions and automation services.
            </Text>
          </Box>

          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
            {services.map((service) => (
              <GridItem
                key={service.title}
                as={Link}
                href={service.link} // Link to individual solution pages
                bg={cardBgColor}
                p={6}
                borderRadius="md"
                boxShadow="lg"
                _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
                transition="all 0.3s ease-in-out"
              >
                <Heading as="h2" size="lg" mb={4} color={headingColor}>
                  {service.title}
                </Heading>
                <Text fontSize="md" color={cardTextColor}>
                  {service.description}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Styling for video */}
      <style jsx>{`
        video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1; // Ensure video stays behind the content
        }
      `}</style>
    </ChakraProvider>
  );
}

// Array to store service details
const services = [
  {
    title: "Web Development",
    description:
      "We provide custom website design and development solutions to enhance your online presence.",
    link: "/solutions/web-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX design services offer visually appealing and user-friendly interfaces for your applications.",
    link: "/solutions/ui-ux-design",
  },
  {
    title: "Automation Services",
    description:
      "Streamline your business processes with our automation solutions using tools like Google Sheets and Zapier.",
    link: "/solutions/automation",
  },
  {
    title: "Full-Stack Development",
    description:
      "We provide complete full-stack development services to scale and optimize your applications.",
    link: "/solutions/full-stack-development",
  },
  {
    title: "GPT Expertise",
    description:
      "Leverage our expertise in Generative AI to enhance and automate your business processes.",
    link: "/solutions/gpt-expertise",
  },
  {
    title: "Stenography",
    description:
      "Fast and accurate transcription solutions for your documentation and record-keeping needs.",
    link: "/solutions/stenography",
  },
  {
    title: "Economics Research",
    description:
      "In-depth economic research to help businesses make informed decisions and gain market insights.",
    link: "/solutions/economics-research",
  },
  {
    title: "Malir Development Authority (MDA) Documentation",
    description:
      "Comprehensive documentation services for public housing schemes under MDA.",
    link: "/solutions/mda",
  },
];
