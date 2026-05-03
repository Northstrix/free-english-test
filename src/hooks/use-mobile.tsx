import * as React from "react"

const MOBILE_WIDTH = 640
const DESKTOP_WIDTH = 1280
const DESKTOP_HEIGHT = 800

/**
 * Standard hook for general UI elements using a 640px threshold.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_WIDTH)
    }
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return !!isMobile
}

/**
 * Specialized hook for Hero/Modal layouts using a 1280x800 threshold.
 * Returns true if the screen is NOT a large desktop (either width < 1280 OR height < 800).
 */
export function useIsHeroMobile() {
  const [isHeroMobile, setIsHeroMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkIsHeroMobile = () => {
      const { innerWidth, innerHeight } = window
      // It is "Hero Desktop" ONLY if both width and height are above thresholds
      const isDesktop = innerWidth >= DESKTOP_WIDTH && innerHeight >= DESKTOP_HEIGHT
      setIsHeroMobile(!isDesktop)
    }
    checkIsHeroMobile()
    window.addEventListener("resize", checkIsHeroMobile)
    return () => window.removeEventListener("resize", checkIsHeroMobile)
  }, [])

  return !!isHeroMobile
}
