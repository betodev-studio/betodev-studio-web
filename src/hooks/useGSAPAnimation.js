import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../motion/gsap'

export function useGSAPAnimation(callback, dependencies = []) {
  const scope = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      callback()
    }, scope)

    return () => {
      context.revert()
    }
  }, dependencies)

  return scope
}
