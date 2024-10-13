"use client";
import React, { useEffect, useState } from 'react';
import Header from '../../component/navbar';
import { Box, Heading, Text, UnorderedList, ListItem, VStack, Divider, useColorModeValue } from "@chakra-ui/react";

export default function WebDevelopment() {
  // Styling for light and dark modes.
  const bgColor = useColorModeValue("rgba(245, 247, 250, 0.9)", "rgba(26, 32, 44, 0.85)");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const headingColor = useColorModeValue("teal.600", "teal.200");
  const borderColor = useColorModeValue("teal.500", "teal.300");

  // Slideshow Background Images Array
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/webdevelopment and automation/w.d_on1.jpg",
    "/webdevelopment and automation/w.d-two.jpg",
    "/webdevelopment and automation/wd.3.webp",
    "/webdevelopment and automation/wd.4.avif",
    "/webdevelopment and automation/wd.5.jpg"
  ];

  // Image change effect (4 seconds per image)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box position="relative" minH="100vh">
      {/* Slideshow Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage={`url(${images[currentImageIndex]})`}
        bgSize="cover"
        bgPosition="center"
        transition="background-image 1s ease-in-out"
        zIndex={-1}
        opacity={0.25}
        filter="blur(5px)"
      />

      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-r, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))"
        zIndex={-1}
      />

      {/* Content Container */}
      <Box
        bg={bgColor}
        color={textColor}
        p={{ base: 6, md: 10 }}
        borderRadius="lg"
        boxShadow="2xl"
        transition="all 0.3s"
        _hover={{ boxShadow: "3xl", transform: "scale(1.03)" }}
        maxW="900px"
        mx="auto"
        mt={12}
        position="relative"
        zIndex={1}
        backdropFilter="blur(6px)"
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

          <Divider borderColor={borderColor} />

          <Box>
            <Heading as="h2" size="lg" mb={3} color={headingColor}>
              Why Choose Our Web Development Services?
            </Heading>
            <Text>
              Our web development services are designed to provide you with a website that is not only visually appealing but also functional and scalable. Here is why we stand out:
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

          <Divider borderColor={borderColor} />

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
    </Box>
  );
}
