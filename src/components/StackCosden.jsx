


export default function Stack({
    children,
    orientation = 'horizontal'
}){
    const orientationStyles = {
        horizontal: {
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
        },
        vertical: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
    }

    return <div style={orientationStyles[orientation]}>{children}</div>
}