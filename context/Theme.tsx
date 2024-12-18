"use client";

import { ThemeProviderProps } from "next-themes/dist/types"
import {ThemeProvider as NextThemesProvider} from "next-themes"

const ThemeProvider = ({children, ...props}: ThemeProviderProps) => {
    console.log("ON SERVER OR CLIENT")
  return (
    <NextThemesProvider {...props}>
        {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider