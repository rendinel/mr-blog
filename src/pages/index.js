import React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import {
  Works,
  Hero,
  FeaturedBlogPost,
  Contact,
  Layout,
  BlogHomePage,
  SinglePost,
} from "../components"

export default function Home() {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.blue },
    },
    theme
  )
  return (
    <ChakraProvider theme={myTheme}>
      <Layout>
        {/* <Hero />
        <Works />
        <Contact />
        <FeaturedBlogPost /> */}
        {/* <BlogHomePage /> */}
        <SinglePost />
      </Layout>
    </ChakraProvider>
  )
}
