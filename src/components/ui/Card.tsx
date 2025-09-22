import React from "react";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export function Card({ children, className }: CardProps) {
    return (
        <div
            className={`rounded-lg border border-gray-800 bg-gray-900 shadow hover:shadow-lg transition-transform hover:scale-105 ${className}`}
        >
            {children}
        </div>
    );
}

export function CardContent({ children, className }: CardProps) {
    return <div className={`p-4 ${className}`}>{children}</div>;
}
