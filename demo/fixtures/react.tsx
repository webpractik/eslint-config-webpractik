import React, { useEffect, useState } from 'react';

const ExampleComponent: React.FC = (props: {}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(1);
    }, []);

    const handleClick = () => {
        console.log('Button clicked');
        setCount(count + 1);
    };

    return (
        <div>
            <ul>
                {[1, 2, 3].map(item => (
                    <li>{item}</li>
                ))}
            </ul>
            <button onClick={handleClick} style={{ color: 'red' }}>
                Click me
            </button>
            <p>{`Count: ${count}`}</p>
        </div>
    );
};

export default ExampleComponent;
