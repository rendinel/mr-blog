import * as React from "react"
import { Link } from "gatsby"
import {
  Avatar,
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

// import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const ContentCard = ({
  date,
  title,
  excerpt,
  slug,
  category,
  image,
}) => {
  // const img = getImage(image)
  return (
    <>
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
            <Image
              src={image}
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
            <Avatar src={image} boxSize="10" />
            <Box fontSize="sm">
              {/* <Text fontWeight="medium">{post.author.name}</Text> */}
              <Text color="muted">{date}</Text>
            </Box>
          </HStack>
        </Stack>
      </Link>
    </>
  )
}
