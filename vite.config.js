import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        prerender({
            routes: ['/'],
            renderer: '@prerenderer/renderer-puppeteer',
            rendererOptions: {
                // The reveal-on-scroll hooks (useReveal/useCountUp) force everything
                // visible via a 2200ms safety timeout when IntersectionObserver never
                // fires (true here, since prerendering never scrolls). Wait past that
                // so the snapshot captures fully-revealed content, not the hidden
                // pre-animation state.
                renderAfterTime: 2500,
                launchOptions: {
                    args: ['--no-sandbox'],
                },
            },
        }),
    ],
})
