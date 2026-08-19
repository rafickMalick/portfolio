import useReveal from '../hooks/useReveal'

/** Masked line reveal — used for hero/section headline lines. */
export function RevealLine({ children, index = 0, as: Tag = 'span', style, className }) {
    const { ref, style: revealStyle } = useReveal('line', index)
    return (
        <Tag style={{ display: 'block', overflow: 'hidden', paddingBottom: 2, ...style }} className={className}>
            <span ref={ref} style={{ display: 'block', ...revealStyle }}>
                {children}
            </span>
        </Tag>
    )
}

/** Fade + translateY reveal — used for cards, rows, grid cells. */
export function Reveal({ children, index = 0, as: Tag = 'div', className, style, ...rest }) {
    const { ref, style: revealStyle } = useReveal('reveal', index)
    return (
        <Tag ref={ref} className={className} style={{ ...style, ...revealStyle }} {...rest}>
            {children}
        </Tag>
    )
}

/** Scale-in pop reveal — used for the timeline dots. */
export function PopReveal({ children, index = 0, as: Tag = 'div', className, style, ...rest }) {
    const { ref, style: revealStyle } = useReveal('pop', index)
    return (
        <Tag ref={ref} className={className} style={{ ...style, ...revealStyle }} {...rest}>
            {children}
        </Tag>
    )
}
