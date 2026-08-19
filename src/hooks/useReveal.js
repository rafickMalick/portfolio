import { useEffect, useRef, useState } from 'react'

const EASE = 'cubic-bezier(.16,.84,.24,1)'

function prefersReducedMotion() {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Mirrors the reference design's [data-line]/[data-reveal]/[data-pop] reveal
 * system: IntersectionObserver-triggered, cascaded by (index % 5) * 70ms,
 * with a 2200ms safety fallback and a reduced-motion bypass.
 */
export default function useReveal(kind = 'reveal', index = 0) {
    const ref = useRef(null)
    const [shown, setShown] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (prefersReducedMotion()) {
            setShown(true)
            return
        }

        let fired = false
        const show = () => {
            if (fired) return
            fired = true
            setShown(true)
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        show()
                        io.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
        )
        io.observe(el)

        const safety = setTimeout(show, 2200)
        return () => {
            io.disconnect()
            clearTimeout(safety)
        }
    }, [])

    const delay = (index % 5) * 70

    const styles = {
        line: {
            opacity: shown ? 1 : 0,
            transform: shown ? 'translateY(0)' : 'translateY(105%)',
            transition: `transform 0.95s ${EASE} ${delay}ms, opacity 0.7s ease ${delay}ms`,
        },
        reveal: {
            opacity: shown ? 1 : 0,
            transform: shown ? 'translateY(0)' : 'translateY(26px)',
            transition: `opacity 0.8s ${EASE} ${delay}ms, transform 0.8s ${EASE} ${delay}ms`,
        },
        pop: {
            opacity: shown ? 1 : 0,
            transform: shown ? 'scale(1)' : 'scale(0)',
            transition: `transform 0.6s cubic-bezier(.2,1.5,.4,1) ${delay}ms, opacity 0.4s ease ${delay}ms`,
        },
    }

    return { ref, style: styles[kind], shown }
}
