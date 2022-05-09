import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const AllPostsLayout = ({
  numPages,
  currentPage,
  prevPage,
  nextPage,
  posts,
}) => {
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
            {/* content card */}
            {posts.map(post => {
              const {
                author,
                slug,
                title,
                featureImage,
                excerpt,
                date,
                category,
              } = post.node.frontmatter
              const img = getImage(featureImage)
              return (
                <Link
                  to={`/blog/${slug}`}
                  key={slug}
                  _hover={{
                    textDecor: "none",
                  }}
                  role="group"
                >
                  <Stack spacing="8">
                    <Box overflow="hidden">
                      <GatsbyImage
                        image={img}
                        alt={title}
                        width="100%"
                        height="15rem"
                        objectFit="cover"
                        // transition="all 0.2s"
                        // _groupHover={{
                        //   transform: "scale(1.05)",
                        // }}
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
                      {/* <Avatar src={img} boxSize="10" /> */}
                      <Box fontSize="sm">
                        <Text fontWeight="medium">{author}</Text>
                        <Text color="muted">{date}</Text>
                      </Box>
                    </HStack>
                  </Stack>
                </Link>
              )
            })}
            {/* content card */}
          </SimpleGrid>
          {/* {isMobile && (
            <Button variant="primary" size="lg">
              Show all
            </Button>
          )} */}
          {/* pag */}
          <Stack direction="row" justify="center">
            <Stack direction="row">
              <Link to={prevPage}>
                <Button
                  disabled={currentPage === 1}
                  variant="primary"
                  size="lg"
                >
                  Prev
                </Button>
              </Link>
              <Link to={nextPage}>
                <Button
                  disabled={currentPage === numPages}
                  variant="primary"
                  size="lg"
                >
                  Next
                </Button>
              </Link>
            </Stack>
          </Stack>
          {/* pag end */}
        </Stack>
      </Container>
    </Box>
  )
}
