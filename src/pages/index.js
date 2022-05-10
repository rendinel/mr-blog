import React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import {
  GlobalLayout,
  Hero,
  Contact,
  Works,
  HomePageFeaturedBlogPosts,
  Layout,
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
        <GlobalLayout>
          <Hero />
          <Works />
          <Contact />
          <HomePageFeaturedBlogPosts />
        </GlobalLayout>
      </Layout>
    </ChakraProvider>
  )
}
