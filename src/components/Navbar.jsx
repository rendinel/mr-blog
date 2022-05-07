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
} from "@chakra-ui/react"
import * as React from "react"
import { FiMenu } from "react-icons/fi"
import logo from "../assets/logo.png"

export const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box
      as="section"
      // pb={{
      //   base: "12",
      //   md: "24",
      // }}
    >
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
                  <Button>Home</Button>
                  <Button>Tasks</Button>
                  <Button>Bookmarks</Button>
                  <Button>Users</Button>
                  <Button aria-current="page">Dashboard</Button>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <Avatar
                mr="16"
                boxSize="10"
                name="Christoph Winston"
                src={logo}
              />
            ) : (
              <IconButton
                variant="ghost-on-accent"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}