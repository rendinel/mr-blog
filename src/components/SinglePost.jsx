import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { BlogPost } from "./BlogPost"
import { posts } from "../data/datablogpost"

export const SinglePost = () => (
  <Box bg="bg-surface">
    <Box bg="rgb(247,250,252)" color="on-accent">
      <Container
        pt={{
          base: "16",
          md: "24",
        }}
        pb={{
          base: "32",
          md: "48",
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
              <Heading
                color="blue.600"
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
      </Container>
    </Box>
    <Container
      pb={{
        base: "16",
        md: "24",
      }}
      mt={{
        base: "-16",
        md: "-24",
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
            base: "12",
            md: "16",
          }}
        >
          <BlogPost post={posts[0]} isHero />
        </Stack>
      </Stack>
    </Container>
  </Box>
)
