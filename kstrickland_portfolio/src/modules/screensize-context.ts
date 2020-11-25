import { useContext } from "react"
import { createContext } from "react"
import { breakpoints } from "./breakpoints"

export const useScreenSize = () => useContext(ScreenSizeContext)

/**
 * Context for current screen size.
 */
export const ScreenSizeContext = createContext(breakpoints.xsmall)
