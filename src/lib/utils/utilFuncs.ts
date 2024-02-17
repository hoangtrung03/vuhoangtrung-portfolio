/**
 * Throttles the given function to only be called at most once every `limit` milliseconds.
 *
 * @param {Function} func - The function to be throttled
 * @param {number} limit - The time limit for throttling in milliseconds
 * @return {() => void} A throttled function
 */
export const throttle = (func: Function, limit: number): (() => void) => {
  let lastFunc: NodeJS.Timeout | null
  let lastRan: number | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any) {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      if (lastFunc) clearTimeout(lastFunc)
      lastFunc = setTimeout(
        function () {
          if (Date.now() - (lastRan as number) >= limit) {
            func.apply(context, args)
            lastRan = Date.now()
          }
        },
        limit - (Date.now() - (lastRan as number))
      )
    }
  }
}

/**
 * Handles scroll events by throttling the callback function.
 * @param cb - The callback function to be throttled
 * @returns A throttled function
 */
export const handleScroll = (cb: Function) => throttle(cb, 100)

/**
 * Applies parallax effect based on scroll position.
 *
 * @param {number} scroll - The current scroll position
 * @param {number} y - The y-coordinate to trigger the parallax effect
 * @param {number} amount - The amount of parallax effect to apply
 * @return {number} The calculated parallax value
 */
export const applyParallax = (scroll: number, y: number, amount: number) => {
  if (scroll > y) {
    const value = (scroll - y) * amount
    return value
  }

  return 0
}
