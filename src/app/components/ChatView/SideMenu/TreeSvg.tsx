import React from 'react';

export interface TreeProps {
    width?: number | string;
    height?: number | string;
    fill?: string;
}

const Tree: React.FC<TreeProps> = ({
    width = 20,
    height = 20,
    fill = 'var(--primary-contrast)',
}) => {
    return (
        <svg
            viewBox="0 0 24 24"
            width={width}
            height={height}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11,19h2v4c0,.553-.448,1-1,1s-1-.447-1-1v-4Zm7.483-13.843h0c-.315-.067-.591-.371-.703-.772-.72-2.582-3.097-4.385-5.78-4.385S6.94,1.803,6.22,4.385c-.112,.401-.388,.705-.703,.772C2.221,5.869-.098,8.837,.003,12.215c.112,3.741,3.364,6.785,7.248,6.785h3.749v-3.586l-3.707-3.707c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293v-3.586c0-.553,.448-1,1-1s1,.447,1,1v3.586l2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-3.707,3.707v3.586h2.784c4.641,0,8.095-2.854,8.213-6.785,.102-3.378-2.217-6.346-5.514-7.058Z" />
        </svg>
    );
};

export default Tree;
