"use client"

import { Switch as ChakraSwitch } from "@/shared/components/ui/switch"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { LuMoon, LuSun } from "react-icons/lu"
import { Box, HStack, Text } from "@chakra-ui/react"

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [checked, setChecked] = useState(resolvedTheme === "dark")

  const handleToggle = (e: { checked: boolean }) => {
    setTheme(e.checked ? "dark" : "light")
    setChecked(e.checked)
  }

  return (
    <HStack gap={4} align="center">
      <Box as="span">
        <LuSun />
      </Box>
      <ChakraSwitch
        checked={checked}
        onCheckedChange={handleToggle}
        size="lg"
        colorPalette='purple'
      />
      <Box as="span" >
        <LuMoon />
      </Box>
    </HStack>
  )
}

export default ThemeSwitcher
