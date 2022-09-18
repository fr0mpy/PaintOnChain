import React, { useEffect } from "react";
// TODO: remove?
interface ITouchMove {
    children: React.ReactNode;
}

interface IElementPosition {
    left: string;
    top: string;
}


export const TouchMove: React.FC<ITouchMove> = ({ children }) => {
    const ref = React.useRef<HTMLDivElement | null>(null);

    const [position, setPosition] = React.useState<IElementPosition>({ top: '', left: '' })

    useEffect(() => {
        const top = ref.current?.style.top ?? '0';
        const left = ref.current?.style.left ?? '0';
        setPosition({ top, left });

    }, []);

    const onTouchMove: React.TouchEventHandler<HTMLDivElement> = ({ targetTouches }) => {
        console.log('touch move')
        const touchLocation = targetTouches[0];

        if (!ref.current) return;

        ref.current.style.top = touchLocation.pageY.toString();
        ref.current.style.left = touchLocation.pageX.toString()


    };

    const onTouchEnd = () => {

    };

    return (
        <div
            ref={ref}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{
                position: 'absolute',
                height: 'fit-content',
                width: 'fit-content',
                top: position.top,
                left: position.left,
                zIndex: 1000
            }}
        >
            {children}
        </div>
    )
}