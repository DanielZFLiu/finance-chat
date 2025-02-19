import React from 'react';

export interface CaretProps {
    width?: number | string;
    height?: number | string;
    fill?: string;
    up?: boolean;
}

const Caret: React.FC<CaretProps> = ({
    width = 20,
    height = 20,
    fill = 'var(--primary-contrast)',
    up = false,
}) => {
    return (
        <svg
            viewBox="0 0 24 24"
            width={width}
            height={height}
            fill={fill}
            style={{
                transform: up ? 'rotate(180deg)' : 'none',
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6.414,9H17.586a1,1,0,0,1,.707,1.707l-5.586,5.586a1,1,0,0,1-1.414,0L5.707,10.707A1,1,0,0,1,6.414,9Z" />
        </svg>
    );
};

export default Caret;
