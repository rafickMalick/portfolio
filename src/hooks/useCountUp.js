import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Mirrors the reference design's [data-count] behaviour: counts up to `to`
 * over 1300ms with a cubic ease-out once the element scrolls into view.
 */
export default function useCountUp(to, suffix = '') {
    const ref = useRef(null)
    const [value, setValue] = useState(0)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        let fired = false
        const run = () => {
            if (fired) return
            fired = true
            if (prefersReducedMotion()) {
                setValue(to)
                return
            }
            const dur = 1300
            const t0 = performance.now()
            const tick = (t) => {
                const k = Math.min(1, (t - t0) / dur)
                const e = 1 - Math.pow(1 - k, 3)
                setValue(Math.round(to * e))
                if (k < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        run()
                        io.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
        )
        io.observe(el)

        const safety = setTimeout(run, 2200)
        return () => {
            io.disconnect()
            clearTimeout(safety)
        }
    }, [to])

    return { ref, text: `${value}${suffix}` }
}
