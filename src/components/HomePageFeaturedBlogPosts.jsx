import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query MyQuery {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            category
            author
            excerpt
            slug
            date(formatString: "MMMM Do, YYYY")
            title
          }
        }
      }
    }
  }
`

export const HomePageFeaturedBlogPosts = () => {
  const data = useStaticQuery(query)
  const {
    allMdx: { edges },
  } = data
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })
  return (
    <Box bg="bg-surface">
      <Container
        py={{
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
          <Stack direction="row" justify="space-between">
            <Stack
              spacing={{
                base: "4",
                md: "5",
              }}
            >
              <Stack spacing="3">
                <Text
                  color="accent"
                  fontWeight="semibold"
                  fontSize={{
                    base: "sm",
                    md: "md",
                  }}
                >
                  Our Blog
                </Text>
                <Heading
                  size={useBreakpointValue({
                    base: "sm",
                    md: "md",
                  })}
                >
                  Latest blog posts
                </Heading>
              </Stack>
              <Text
                color="muted"
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
              >
                Ice cream pudding dragée macaroon donut marzipan chocolate
              </Text>
            </Stack>
            {!isMobile && (
              <Button variant="primary" size="lg">
                Show all
              </Button>
            )}
          </Stack>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            gap={{
              base: "12",
              lg: "8",
            }}
          >
            {edges.map(post => {
              const { category, excerpt, slug, date, title, author } =
                post.node.frontmatter
              return (
                <Link
                  key={slug}
                  _hover={{
                    textDecor: "none",
                  }}
                  role="group"
                >
                  <Stack spacing="8">
                    <Box overflow="hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt={title}
                        width="full"
                        height="15rem"
                        objectFit="cover"
                        transition="all 0.2s"
                        _groupHover={{
                          transform: "scale(1.05)",
                        }}
                      />
                    </Box>
                    <Stack spacing="3">
                      <Text fontSize="sm" fontWeight="semibold" color="accent">
                        {category}
                      </Text>
                      <Heading size="xs">{title}</Heading>
                      <Text color="muted">{excerpt}</Text>
                    </Stack>
                    <HStack>
                      {/* <Avatar src={post.author.avatarUrl} boxSize="10" /> */}
                      <Box fontSize="sm">
                        <Text fontWeight="medium">{author}</Text>
                        <Text color="muted">{date}</Text>
                      </Box>
                    </HStack>
                  </Stack>
                </Link>
              )
            })}
          </SimpleGrid>
          {isMobile && (
            <Button variant="primary" size="lg">
              Show all
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
