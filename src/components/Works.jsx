import {
  Avatar,
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import * as React from "react"
import { posts } from "../data/datawork"

export const Works = () => (
  <Container
    bg="white"
    py={{
      base: "16",
      md: "24",
    }}
  >
    <Stack
      spacing={{
        base: "16",
        md: "24",
      }}
    >
      <Stack
        spacing={{
          base: "8",
          md: "10",
        }}
        align="center"
      >
        <Stack
          spacing={{
            base: "4",
            md: "6",
          }}
          textAlign="center"
        >
          <Stack spacing="4">
            <Text
              fontWeight="semibold"
              color="accent"
              fontSize={{
                base: "sm",
                md: "md",
              }}
            >
              Our Blog
            </Text>
            <Heading
              size={useBreakpointValue({
                base: "md",
                md: "lg",
              })}
            >
              Latest blog posts
            </Heading>
          </Stack>
        </Stack>
      </Stack>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        rowGap={{
          base: "8",
          md: "12",
        }}
        columnGap="8"
      >
        {posts.map(post => (
          <Link
            key={post.id}
            _hover={{
              textDecor: "none",
            }}
            role="group"
          >
            <Box
              p="6"
              bg="bg-surface"
              boxShadow={mode("lg", "lg-dark")}
              _groupHover={{
                boxShadow: mode("xl", "xl-dark"),
              }}
              transition="all 0.2s"
              height="full"
            >
              <Stack
                spacing={{
                  base: "8",
                  lg: "16",
                }}
                justify="space-between"
                height="full"
              >
                <Stack spacing="8">
                  <Box overflow="hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width="full"
                      height="15rem"
                      objectFit="cover"
                    />
                  </Box>
                  <Stack spacing="3">
                    <Text fontSize="sm" fontWeight="semibold" color="accent">
                      {post.category}
                    </Text>
                    <Heading size="xs">{post.title}</Heading>
                    <Text color="muted">{post.excerpt}</Text>
                  </Stack>
                </Stack>
                <HStack>
                  <Avatar src={post.author.avatarUrl} boxSize="10" />
                  <Box fontSize="sm">
                    <Text fontWeight="medium">{post.author.name}</Text>
                    <Text color="muted">{post.publishedAt}</Text>
                  </Box>
                </HStack>
              </Stack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)
