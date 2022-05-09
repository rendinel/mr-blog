import React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import {
  Layout,
  Hero,
  Contact,
  Works,
  HomePageFeaturedBlogPosts,
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
        <Hero />
        <Works />
        <Contact />
        <HomePageFeaturedBlogPosts />
      </Layout>
    </ChakraProvider>
  )
}
