import React from "react"
import { Contact, GlobalLayout } from "../components"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"

const contacts = () => {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.blue },
    },
    theme
  )
  return (
    <ChakraProvider theme={myTheme}>
      <GlobalLayout>
        <Contact />
      </GlobalLayout>
    </ChakraProvider>
  )
}

export default contacts
