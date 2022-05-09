import React from "react"
import { ErrorPageLayout } from "../components"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"

const notFound = () => {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.blue },
    },
    theme
  )
  return (
    <ChakraProvider theme={myTheme}>
      <ErrorPageLayout />
    </ChakraProvider>
  )
}

export default notFound
