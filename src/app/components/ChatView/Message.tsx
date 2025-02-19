import React, { useEffect, useState } from 'react';
import { renderText } from '@/lib/renderer';

interface MessageProps {
    content: string;
}

const AsyncRenderText: React.FC<MessageProps> = ({ content }) => {
    const [html, setHtml] = useState("");

    useEffect(() => {
        renderText(content).then((result) => {
            setHtml(result);
        });
    }, [content]);

    return <div className="message-content" dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default AsyncRenderText;
