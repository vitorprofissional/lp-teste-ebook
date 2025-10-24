import React from 'react';

interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ href, children, className = '' }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg shadow-green-500/20 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 ${className}`}
        >
            {children}
        </a>
    );
};