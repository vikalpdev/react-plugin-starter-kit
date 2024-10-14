import React from 'react';

interface ExampleComponentProps {
    text: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ text }) => {
    return (
        <div className="bg-blue-500 text-white p-4 rounded">
            <h1 className="text-2xl font-bold">{text}</h1>
        </div>
    );
};

export default ExampleComponent;
