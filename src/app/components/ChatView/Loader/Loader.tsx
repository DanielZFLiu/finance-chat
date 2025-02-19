import React, { useMemo } from 'react';
import './Loader.css';

interface LoaderProps {
    loadingText: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingText }) => {
    const loaderClass = useMemo(() => {
        const loaders = ['loader1', 'loader2', 'loader3', 'loader4', 'loader5', 'loader6'];
        const randomIndex = Math.floor(Math.random() * loaders.length);
        return loaders[randomIndex];
    }, []);

    return (
        <div className="loader-overlay">
            <div className={loaderClass}></div>
            <div className="loader-text">{loadingText}</div>
        </div>
    );
};

export default Loader;
