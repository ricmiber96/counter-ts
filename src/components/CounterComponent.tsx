import React from 'react';
import { useCounter } from '../hooks/useCounter';

type Props = {
    // TODO: Define the component props
};

export const CounterComponent: React.FC<Props> = () => {
    const {state, increment, decrement} = useCounter();

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CounterComponent;