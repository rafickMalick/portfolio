import { useEffect, useState } from 'react'

const STORAGE_KEY = 'rk-theme-v3'

export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'dark'
        return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => {
            const next = prev === 'light' ? 'dark' : 'light'
            try {
                localStorage.setItem(STORAGE_KEY, next)
            } catch (e) {}
            return next
        })
    }

    return { theme, toggleTheme }
}
