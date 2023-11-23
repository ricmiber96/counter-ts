
export interface CounterState {
    count: number;
}

export type CounterAction = {
    type: 'INCREMENT';
} | {
    type: 'DECREMENT';
}

export interface CounterContextType {
    state: CounterState;
    increment: () => void;
    decrement: () => void;
}

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'INCREMENT':
            return { 
               
                count: state.count + 1 
            };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}