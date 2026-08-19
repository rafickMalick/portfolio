import { useEffect } from 'react'

function prefersReducedMotion() {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Drives the three ambient effects from the reference design in one rAF
 * loop: pointer-following glow, hero background parallax, and the top
 * scroll-progress bar. All are smoothed (lerp factor .075 / .12) to match
 * the original timings, and skipped entirely under reduced motion.
 */
export default function useScrollFX({ glowRef, parallaxRef, progressRef }) {
    useEffect(() => {
        if (prefersReducedMotion()) return

        let mx = window.innerWidth / 2
        let my = window.innerHeight / 2
        let gx = mx
        let gy = my
        let prog = 0
        let raf

        const onMove = (e) => {
            mx = e.clientX
            my = e.clientY
            if (glowRef.current) glowRef.current.style.opacity = '1'
        }
        window.addEventListener('pointermove', onMove, { passive: true })

        const loop = () => {
            gx += (mx - gx) * 0.075
            gy += (my - gy) * 0.075

            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(${gx - 260}px, ${gy - 260}px, 0)`
            }
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translate3d(${(gx / window.innerWidth - 0.5) * -22}px, ${(gy / window.innerHeight - 0.5) * -16}px, 0)`
            }

            const h = document.documentElement.scrollHeight - window.innerHeight
            const target = h > 0 ? Math.min(1, window.scrollY / h) : 0
            prog += (target - prog) * 0.12
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${prog.toFixed(4)})`

            raf = requestAnimationFrame(loop)
        }
        raf = requestAnimationFrame(loop)

        return () => {
            window.removeEventListener('pointermove', onMove)
            cancelAnimationFrame(raf)
        }
    }, [glowRef, parallaxRef, progressRef])
}
