"use client";
import React from 'react';
import { Box, Heading, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import Header from '../component/navbar'; // Update the path according to your project structure

export default function About() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const headingColor = useColorModeValue("blue.700", "blue.300");

  return (
    <Box bg={bgColor} color={textColor} p={10} borderRadius="md" boxShadow="lg" maxW="1200px" mx="auto" mt={10}>
      <Header />
      <VStack align="start" spacing={8} mt={8}>
        {/* About Header */}
        <Box bg="blue.900" color="white" p={8} borderRadius="md" textAlign="center" w="full">
          <Heading as="h1" size="2xl">About Fatima Zehra StenoWeb Dynamics</Heading>
        </Box>

        {/* CEO Message Section */}
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} bg="white" p={8} borderRadius="md" boxShadow="lg" w="full">
          <Box flex="1" display="flex" justifyContent="center" alignItems="center" mb={{ base: 4, md: 0 }}>
            <Image src="/NAVEED-removebg-preview.jpg" alt="CEO Image" borderRadius="full" boxSize="200px" boxShadow="lg" />
          </Box>
          <Box flex="2" pl={{ md: 8 }}>
            <Heading as="h2" size="lg" color={headingColor} mb={4}>CEO Message</Heading>
            <Text fontSize="lg" lineHeight="tall">
              As the CEO of Fatima Zehra StenoWeb Dynamics, I am proud to lead a team of talented professionals who are passionate about creating cutting-edge web solutions. Our commitment to excellence drives us to continuously innovate and deliver the highest quality services to our clients. We believe in the power of collaboration, and our goal is to empower your business with the tools and strategies needed to thrive in the digital landscape. Thank you for choosing Fatima Zehra StenoWeb Dynamics as your trusted partner.
            </Text>
            <Text fontSize="lg" fontWeight="bold" color="blue.600" mt={4}>- Hafiz Naveed Uddin, CEO</Text>
          </Box>
        </Box>

        {/* Our Vision Section */}
        <Box bg="white" p={8} borderRadius="md" boxShadow="lg" w="full" _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }} transition="all 0.3s ease">
          <Heading as="h2" size="lg" color={headingColor} mb={4}>Our Vision</Heading>
          <Text fontSize="lg" lineHeight="tall">
            At Fatima Zehra StenoWeb Dynamics, we are committed to transforming your ideas into reality with innovative web solutions. Our vision is to empower businesses and individuals by providing top-notch web development, design, and automation services that are not only efficient but also scalable.
          </Text>
        </Box>

        {/* Our Services Section */}
        <Box bg="white" p={8} borderRadius="md" boxShadow="lg" w="full" _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }} transition="all 0.3s ease">
          <Heading as="h2" size="lg" color={headingColor} mb={4}>Our Services</Heading>
          <Text fontSize="lg" lineHeight="tall" mb={4}>
            We specialize in delivering a wide range of services that cater to your unique needs. Whether you're looking to build a brand-new website or enhance your existing one, our team of experts is here to assist you every step of the way. Here's what we offer:
          </Text>
          <VStack align="start" spacing={3} pl={5}>
            <Text as="li"><strong>Website Development:</strong> Creating responsive, user-friendly websites tailored to your business needs, ensuring a seamless experience across all devices.</Text>
            <Text as="li"><strong>Website Enhancements:</strong> Upgrading and optimizing existing websites to improve performance, add new features, and keep up with the latest trends.</Text>
            <Text as="li"><strong>UI/UX Design:</strong> Crafting visually stunning and intuitive user interfaces that provide an exceptional user experience.</Text>
            <Text as="li"><strong>Automated Services:</strong> Streamlining your business processes with customized automation solutions, integrating Google Sheets with Zapier for seamless workflows.</Text>
            <Text as="li"><strong>Custom GPT Automation:</strong> Leveraging the power of Custom GPTs to automate tasks, generate insights, and enhance decision-making processes.</Text>
          </VStack>
        </Box>

        {/* Why Choose Us Section */}
        <Box bg="white" p={8} borderRadius="md" boxShadow="lg" w="full" _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }} transition="all 0.3s ease">
          <Heading as="h2" size="lg" color={headingColor} mb={4}>Why Choose Us?</Heading>
          <Text fontSize="lg" lineHeight="tall">
            Fatima Zehra StenoWeb Dynamics stands out for its dedication to quality, attention to detail, and personalized approach. We believe in building strong relationships with our clients by understanding their goals and delivering solutions that exceed expectations.
          </Text>
        </Box>

        {/* Get in Touch Section */}
        <Box bg="white" p={8} borderRadius="md" boxShadow="lg" w="full" _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }} transition="all 0.3s ease">
          <Heading as="h2" size="lg" color={headingColor} mb={4}>Get in Touch</Heading>
          <Text fontSize="lg" lineHeight="tall">
            Ready to take your business to the next level? Contact us today to discuss how we can help you achieve your goals.
          </Text>
        </Box>

        {/* Footer */}
        <Box bg="blue.900" color="white" p={4} borderRadius="md" textAlign="center" w="full">
          <Text>© 2024 Fatima Zehra StenoWeb Dynamics. All rights reserved.</Text>
        </Box>
      </VStack>
    </Box>
  );
}
