import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react"
import React, { useEffect } from "react"
import { Link } from "gatsby"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import logo from "../assets/logo.png"
import { Algolia } from "./Algolia"

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  useEffect(() => {
    onClose()
  }, [isDesktop, onClose])

  return (
    <Box as="section">
      <Box as="nav" bg="bg-accent" color="on-accent">
        <Container
          py={{
            base: "3",
            lg: "4",
          }}
        >
          <Flex justify="space-between">
            <HStack spacing="4">
              {isDesktop && (
                <ButtonGroup ml="14" variant="ghost-on-accent" spacing="1">
                  <Link to="/">
                    <Button>Home</Button>
                  </Link>
                  <Link to="/#works">
                    <Button>Service</Button>
                  </Link>
                  <Link to="/#contact">
                    <Button>Contact Me</Button>
                  </Link>
                  <Button onClick={onOpen} aria-current="page">
                    Search
                  </Button>
                  <Link to="/blog">
                    <Button aria-current="page">Blog</Button>
                  </Link>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <Avatar mr="16" boxSize="10" name="logo" src={logo} />
            ) : (
              <IconButton
                onClick={onOpen}
                variant="ghost-on-accent"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
            {isOpen ? (
              <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg="#F7FAFC">
                  <DrawerBody>
                    <Flex mb="5" justifyContent="center">
                      <IconButton
                        bg="blue.500"
                        onClick={onClose}
                        icon={
                          <AiOutlineClose color="#fff" fontSize="1.25rem" />
                        }
                        aria-label="Open Menu"
                      />
                    </Flex>
                    <Box>
                      <Link to="/">
                        <Text fontWeight="bold" color="blue.500">
                          Home
                        </Text>
                      </Link>
                    </Box>
                    <Box onClick={onClose}>
                      <Link to="/#works">
                        <Text fontWeight="bold" color="blue.500">
                          Services
                        </Text>
                      </Link>
                    </Box>
                    <Box onClick={onClose}>
                      <Link to="/#contact">
                        <Text fontWeight="bold" color="blue.500">
                          Contact Me
                        </Text>
                      </Link>
                    </Box>
                    <Box onClick={onClose}>
                      <Link to="/blog">
                        <Text fontWeight="bold" color="blue.500">
                          Blog
                        </Text>
                      </Link>
                    </Box>
                    <Flex mt="5" mb="1rem" justifyContent="center">
                      <Text fontWeight="bold" color="blue.500">
                        Search
                      </Text>
                    </Flex>
                    <Algolia />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            ) : (
              ""
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
